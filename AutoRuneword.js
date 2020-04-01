/**
*	@filename	AutoRuneword.js
*	@author		laz (edited by sn0)
*	@desc		make runewords
*/

function AutoRuneword () {
	var tick = getTickCount(),
		keyPressed;
	
	this.keyEvent = function (key) {
		if (key && key === Config.AutoRunewordButton) {
			keyPressed = true;
		}
	};
	
	addEventListener("keyup", this.keyEvent);
	me.overhead("Let's make some runewords!");
	delay(1000);
	AutoRunewords.init();
	
	while (true) {
		if (!keyPressed && (!Config.AutoRunewordClock || (Config.AutoRunewordClock && Config.AutoRunewordClock*1000 > getTickCount() - tick))) {
			delay(100);
			continue;
		}
		sendPacket(1,0x40);
		tick = getTickCount();
		AutoRunewords.checkMats();
		AutoRunewords.makeRunewords();
		AutoRunewords.clearInvo();
		
		keyPressed = false;
	}
	
	return true;
};

var AutoRunewords = {
	joinTick : getTickCount(),
	bases : [],
	runes : [],
	
	init: function () {
		var i, info, parsedLine;
		
		Town.goToTown(1);
		Town.move("stash");

		// change text to classid
		for (i = 0; i < Config.Runewords.length; i += 1) {
			if (Config.Runewords[i][0] !== false) {
				if (isNaN(Config.Runewords[i][1])) {
					if (NTIPAliasClassID.hasOwnProperty(Config.Runewords[i][1].replace(/\s+/g, "").toLowerCase())) {
						Config.Runewords[i][1] = NTIPAliasClassID[Config.Runewords[i][1].replace(/\s+/g, "").toLowerCase()];
					} else {
						Misc.errorReport("ÿc1Invalid runewords entry:ÿc0 " + Config.Runewords[i][1]);
						Config.Runewords.splice(i, 1);

						i -= 1;
					}
				}
			} else {
				Config.Runewords.splice(i, 1);
				i -= 1;
			}
		}
	},
	
	clearInvo: function() {
		var invoItems = me.findItems(-1, -1, 3);
		
		while (invoItems.length) {
			let item = invoItems.shift();
			
			if (!item.getFlag(0x4000000)) {
				item.drop();
			}
		}
		
		return true;
	},
	
	checkMats: function () { //Scans ground for a full set of a given rw
		var item = getUnit(4);
		this.bases = [];
		this.runes = [];
		this.runeids = [];
		
		if (!item) return;

		do {
			if (item.mode === 3 || item.mode === 5) {
				
				for (let i = 0; i < Config.Runewords.length; i++) {
					//print(Config.Runewords[i][0]);
					if (item.quality <= 3 && item.classid === Config.Runewords[i][1] && item.getStat(194) === Config.Runewords[i][0].length) {
						let baseInfo = [].concat(Config.Runewords[i][0]);
						let socketed = item.getItems().length
						for (var j = 0; j < socketed; j++) {
							baseInfo.shift();
						}
						if (!baseInfo.length) break;
						this.bases.push([copyUnit(item), baseInfo]);
						
					} else if (item.itemType === 74) {	//Is a rune
						this.runes.push(copyUnit(item));
						this.runeids.push(item.classid);
						break;
					}
				}
			}
		} while (item.getNext());
		
	},
	
	makeRunewords: function () {
		if (!this.bases.length || !this.runes.length) return
		
		for (let i = 0; i < this.bases.length; i++) {
			let runeids = [].concat(this.runeids);
			let found = 0;
			
			for (let j = 0; j < this.bases[i][1].length; j++) {
				if (runeids.indexOf(this.bases[i][1][j]) > -1) {
					runeids.splice(runeids.indexOf(this.bases[i][1][j]), 1);
					found++
				}
			}

			if (found < this.bases[i][1].length) { //Didn't find all the runes needed for rw
				continue;
			}
			
			Pickit.pickItem(this.bases[i][0]);
			
			if (this.bases[i][0].location !== 3) {
				if (getUnit(100)) getUnit(100).drop();
				continue;
			}
			
			while (this.bases[i][1].length) {
				let findRune =  this.bases[i][1].shift();
				
				for (let s = 0; s < this.runeids.length; s++) {
					
					if (this.runeids[s] === findRune) {
						delay(500 + me.ping * 2);
						this.socketItem(this.bases[i][0], this.runes[s]);
						this.runes.splice(s, 1);
						this.runeids.splice(s, 1);
						
						break;
					}
				}
			}
			
			print("Made runeword: " + this.bases[i][0].fname.split("\n").reverse().join(" ").replace(/ÿc[0-9!"+<;.*]/, ""));
			Misc.logItem("Made runeword", this.bases[i][0]);
			
			if (Config.AutoRunewordStash) {
				if (Storage.Stash.CanFit(this.bases[i][0])) {
					Town.openStash();
					Storage.Stash.MoveTo(this.bases[i][0]);
					me.cancel();
				} else {
					include("MuleLogger.js");
					MuleLogger.logChar();
					
					while (Math.floor((getTickCount() - this.joinTick) / 1000) < Config.MinGameTime) {
						me.overhead("Stash full, getting new mule in " + (Config.MinGameTime - Math.floor((getTickCount() - this.joinTick) / 1000)) + "s");
						delay(1000);
					}
					
					me.overhead("Stash full, getting new mule");
					delay(1000);
					remove();
					D2Bot.restart();
					delay(500);
				}
			} else {
				Packet.dropItem(this.bases[i][0]);
			}
			
			this.bases.splice(i, 1);
			i--;
		}
		
		this.bases = [];
		this.runes = [];
	},
	
	socketItem: function (base, rune) { //Packet based
		var i, tick;
		
		if (base.location !== 3) return false;
		
		if (getUnit(100) && rune.gid !== getUnit(100).gid) {
			getUnit(100).drop();
			return false;
		}
		
		while (!getUnit(100)) {
			sendPacket(1, 0x16, 4, 4, 4, rune.gid, 4, 1);
			delay(200 + me.ping * 2);
			print("0x16");
		}

		for (i = 0; i < 3; i += 1) {
			delay(200 + me.ping * 2);
			sendPacket(1, 0x28, 4, rune.gid, 4, base.gid);
			print("0x28");

			tick = getTickCount();

			while (getTickCount() - tick < 2000) {
				if (!me.itemoncursor) {
					delay(250);

					return true;
				}

				delay(10);
			}
		}

		return false;
	}	
};

function remove () {
	try {
		var string = FileTools.readText(me.profile + ".txt");
		var jobs = string.split("\n");
		jobs.shift();
		jobs.pop();
		string = "";
		while (jobs.length > 0) {
			string += jobs.shift() + "\n";
		}
		FileTools.writeText(me.profile + ".txt", string);
	} catch (e) {
		//do nothing
	}
}
