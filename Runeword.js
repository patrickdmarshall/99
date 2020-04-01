function LoadConfig() {
	Scripts.AutoRuneword = true;			//Check for runes and bases on ground and make runewords
		Config.AutoRunewordButton 	= 69; 	//69 = E key, any key will work. false to disable
		Config.AutoRunewordClock 	= 10; 	//Check every xxx seconds for bases and runes 10s minimum. false to disable
		Config.AutoRunewordStash	= true; //Stash made runewords (will drop them if no space in stash)

		include("ShopDrop.js");
		Config.PickitFiles.push("shop/" + ShopDrop.getRealmAcro() + ".nip");
	
		//  ############################################ Runeword Armors ####################################
		
		  Config.Runewords.push([Runeword.Bone,"Archon Plate", Roll.NonEth]);    				//Make Bone Archon Plate
		  Config.Runewords.push([Runeword.Bone,"Dusk Shroud", Roll.NonEth]);    				//Make Bone Dusk Shroud
		  Config.Runewords.push([Runeword.Bone,"Mage Plate", Roll.NonEth]);    					//Make Bone Mage Plate
		  Config.Runewords.push([Runeword.Bramble,"Archon Plate", Roll.NonEth]);    			//Make Bramble Archon Plate
		  Config.Runewords.push([Runeword.Bramble,"Dusk Shroud", Roll.NonEth]);    				//Make Bramble Dusk Shroud
		  Config.Runewords.push([Runeword.Bramble,"Sacred Armor", Roll.NonEth]);    			//Make Bramble Sacred Armor
		  Config.Runewords.push([Runeword.ChainsofHonor,"Archon Plate", Roll.NonEth]);    		//Make ChainsofHonor Archon Plate
		  Config.Runewords.push([Runeword.ChainsofHonor,"Dusk Shroud", Roll.NonEth]);    		//Make ChainsofHonor Dusk Shroud
		  Config.Runewords.push([Runeword.ChainsofHonor,"Sacred Armor", Roll.NonEth]);    		//Make ChainsofHonor Sacred Armor
		  Config.Runewords.push([Runeword.ChainsofHonor,"Archon Plate", Roll.Eth]);    			//Make ChainsofHonor ETH Archon Plate
		  Config.Runewords.push([Runeword.ChainsofHonor,"Dusk Shroud", Roll.Eth]);    			//Make ChainsofHonor ETH Dusk Shroud
		  Config.Runewords.push([Runeword.ChainsofHonor,"Sacred Armor", Roll.Eth]);    			//Make ChainsofHonor ETH Sacred Armor
		  Config.Runewords.push([Runeword.Dragon,"Archon Plate", Roll.NonEth]);    				//Make Dragon Archon Plate
		  Config.Runewords.push([Runeword.Dragon,"Dusk Shroud", Roll.NonEth]);    				//Make Dragon Dusk Shroud
		  Config.Runewords.push([Runeword.Dragon,"Mage Plate", Roll.NonEth]);    				//Make Dragon Mage Plate
		  Config.Runewords.push([Runeword.Duress,"Archon Plate", Roll.NonEth]);    				//Make Duress Archon Plate
		  Config.Runewords.push([Runeword.Duress,"Dusk Shroud", Roll.NonEth]);   			 	//Make Duress Dusk Shroud
		  Config.Runewords.push([Runeword.Duress,"Mage Plate", Roll.NonEth]);    				//Make Duress Mage Plate
		  Config.Runewords.push([Runeword.Duress,"Sacred Armor", Roll.NonEth]);    				//Make Duress Sacred Armor
		  Config.Runewords.push([Runeword.Enigma,"Archon Plate", Roll.NonEth]);    				//Make Enigma Archon Plate
		  Config.Runewords.push([Runeword.Enigma,"Dusk Shroud", Roll.NonEth]);    				//Make Enigma Dusk Shroud
		  Config.Runewords.push([Runeword.Enigma,"Gothic Plate", Roll.NonEth]);    				//Make Enigma Gothic Plate
		  Config.Runewords.push([Runeword.Enigma,"Mage Plate", Roll.NonEth]);    				//Make Enigma Mage Plate
		  Config.Runewords.push([Runeword.Enigma,"Scarab Husk", Roll.NonEth]);    				//Make Enigma Scarab Husk
		  Config.Runewords.push([Runeword.Enigma,"Wire Fleece", Roll.NonEth]);    				//Make Enigma Wire Fleece
		  Config.Runewords.push([Runeword.Enigma,"Wyrmhide", Roll.NonEth]);    					//Make Enigma Wyrmhide
		  Config.Runewords.push([Runeword.Enlightenment,"Archon Plate", Roll.NonEth]);    		//Make Enlightenment Archon Plate
		  Config.Runewords.push([Runeword.Enlightenment,"Dusk Shroud", Roll.NonEth]);    		//Make Enlightenment Dusk Shroud
		  Config.Runewords.push([Runeword.Enlightenment,"Mage Plate", Roll.NonEth]);    		//Make Enlightenment Mage Plate
		  Config.Runewords.push([Runeword.Fortitude,"Archon Plate", Roll.NonEth]);    			//Make Fortitude Archon Plate
		  Config.Runewords.push([Runeword.Fortitude,"Dusk Shroud", Roll.NonEth]);    			//Make Fortitude Dusk Shroud
		  Config.Runewords.push([Runeword.Fortitude,"Sacred Armor", Roll.NonEth]);    			//Make Fortitude Sacred Armor
		  Config.Runewords.push([Runeword.Fortitude, "Wire Fleece", Roll.NonEth]);     			//Make Fortitude Wire Fleece
		  Config.Runewords.push([Runeword.Fortitude, "Boneweave", Roll.NonEth]);     			//Make Fortitude Boneweave
		  Config.Runewords.push([Runeword.Fortitude, "Kraken Shell", Roll.NonEth]);     		//Make Fortitude Kraken Shell
		  Config.Runewords.push([Runeword.Fortitude, "Great Hauberk", Roll.NonEth]);     		//Make Fortitude Great Hauberk
		  Config.Runewords.push([Runeword.Fortitude, "Loricated Mail", Roll.NonEth]);    		//Make Fortitude Loricated Mail
		  Config.Runewords.push([Runeword.Peace,"Archon Plate", Roll.NonEth]);    				//Make Peace Archon Plate
		  Config.Runewords.push([Runeword.Peace,"Dusk Shroud", Roll.NonEth]);    				//Make Peace Dusk Shroud
		  Config.Runewords.push([Runeword.Peace,"Mage Plate", Roll.NonEth]);    				//Make Peace Mage Plate
		  Config.Runewords.push([Runeword.Stone,"Archon Plate", Roll.NonEth]);    				//Make Stone Archon Plate
		  Config.Runewords.push([Runeword.Stone,"Dusk Shroud", Roll.NonEth]);    				//Make Stone Dusk Shroud
		  Config.Runewords.push([Runeword.Stone,"Sacred Armor", Roll.NonEth]);    				//Make Stone Sacred Armor
		  Config.Runewords.push([Runeword.Stone,"Archon Plate", Roll.Eth]);    					//Make Stone ETH Archon Plate
		  Config.Runewords.push([Runeword.Stone,"Dusk Shroud", Roll.Eth]);    					//Make Stone ETH Dusk Shroud
		  Config.Runewords.push([Runeword.Stone,"Sacred Armor", Roll.Eth]);    					//Make Stone ETH Sacred Armor
		  Config.Runewords.push([Runeword.Treachery,"Archon Plate", Roll.NonEth]);    			//Make Treachery Archon Plate
		  Config.Runewords.push([Runeword.Treachery,"Dusk Shroud", Roll.NonEth]);    			//Make Treachery Dusk Shroud
		  Config.Runewords.push([Runeword.Treachery,"Mage Plate", Roll.NonEth]);    			//Make Treachery Mage Plate
		  Config.Runewords.push([Runeword.Wealth,"Archon Plate", Roll.NonEth]);   			 	//Make Wealth Archon Plate
		  Config.Runewords.push([Runeword.Wealth,"Dusk Shroud", Roll.NonEth]);    				//Make Wealth Dusk Shroud
		  Config.Runewords.push([Runeword.Wealth,"Mage Plate", Roll.NonEth]);    				//Make Wealth Mage Plate
		  Config.Runewords.push([Runeword.Myth,"Archon Plate", Roll.NonEth]);   		 		//Make Myth Archon Plate
		  Config.Runewords.push([Runeword.Myth,"Dusk Shroud", Roll.NonEth]);    				//Make Myth Dusk Shroud
		  Config.Runewords.push([Runeword.Myth,"Mage Plate", Roll.NonEth]);    					//Make Myth Mage Plate
		  Config.Runewords.push([Runeword.Principle,"Archon Plate", Roll.NonEth]);    			//Make Principle Archon Plate
		  Config.Runewords.push([Runeword.Principle,"Dusk Shroud", Roll.NonEth]);    			//Make Principle Dusk Shroud
		  Config.Runewords.push([Runeword.Principle,"Mage Plate", Roll.NonEth]);   	 			//Make Principle Mage Plate
		  Config.Runewords.push([Runeword.Prudence,"Archon Plate", Roll.NonEth]);    			//Make Prudence Archon Plate
		  Config.Runewords.push([Runeword.Prudence,"Sacred Armor", Roll.NonEth]);    			//Make Prudence Sacred Armor
		  Config.Runewords.push([Runeword.Rain,"Archon Plate", Roll.NonEth]);    				//Make Rain Archon Plate
		  Config.Runewords.push([Runeword.Rain,"Dusk Shroud", Roll.NonEth]);    				//Make Rain Dusk Shroud
		  Config.Runewords.push([Runeword.Rain,"Mage Plate", Roll.NonEth]);    					//Make Rain Mage Plate

		
		//  ############################################ Runeword Helmns#####################################
		
		  Config.Runewords.push([Runeword.Dream,"Diadem", Roll.NonEth]);    					//Make Dream Diadem
		  Config.Runewords.push([Runeword.Dream,"Tiara", Roll.NonEth]);    						//Make Dream Tiara
		  Config.Runewords.push([Runeword.Dream,"Demonhead", Roll.NonEth]);    					//Make Dream Demonhead
		  Config.Runewords.push([Runeword.Dream,"Bone Visage", Roll.NonEth]);    				//Make Dream Bone Visage
		  Config.Runewords.push([Runeword.Delirium,"Bone Visage", Roll.NonEth]);    			//Make Delirium Bone Visage
		  Config.Runewords.push([Runeword.Delirium,"Diadem", Roll.NonEth]);    					//Make Delirium Diadem
		  Config.Runewords.push([Runeword.Delirium,"Tiara", Roll.NonEth]);    					//Make Delirium Tiara
		  Config.Runewords.push([Runeword.Delirium,"Demonhead", Roll.NonEth]);    				//Make Delirium Demonhead
		
		//  ############################################ Runeword Shields#####################################
		
		  Config.Runewords.push([Runeword.Dream,"Troll Nest", Roll.NonEth]);    				//Make Dream Troll Nest
		  Config.Runewords.push([Runeword.Splendor,"Troll Nest", Roll.NonEth]);    				//Make Splendor Troll Nest
		  Config.Runewords.push([Runeword.Splendor,"Grim Shield", Roll.NonEth]);    			//Make Splendor Grim Shield
		  Config.Runewords.push([Runeword.Spirit,"Phase Blade", Roll.NonEth]);    			    //Make Spirit Phase Blade
		  Config.Runewords.push([Runeword.Spirit,"Akaran Targe", Roll.NonEth]);    				//Make Spirit Akaran Targe
		  Config.Runewords.push([Runeword.Spirit,"Akaran Targe", Roll.NonEth]);    				//Make Spirit Sacred Targe
		  Config.Runewords.push([Runeword.Spirit,"Monarch", Roll.NonEth]);    					//Make Spirit Monarch
		  Config.Runewords.push([Runeword.Rhyme,"Troll Nest", Roll.NonEth]);    				//Make Rhyme Troll Nest
		  Config.Runewords.push([Runeword.Rhyme,"Grim Shield", Roll.NonEth]);    				//Make Rhyme Grim Shield
		  Config.Runewords.push([Runeword.Phoenix,"Vortex Shield", Roll.NonEth]);    			//Make Phoenix Vortex Shield
		  Config.Runewords.push([Runeword.Phoenix,"Sacred Targe", Roll.NonEth]);    			//Make Phoenix Sacred Targe
		  Config.Runewords.push([Runeword.Phoenix,"Monarch", Roll.NonEth]);    					//Make Phoenix Monarch
		  Config.Runewords.push([Runeword.Sanctuary,"Troll Nest", Roll.NonEth]);    			//Make Sanctuary Troll Nest
		  Config.Runewords.push([Runeword.Sanctuary,"Kite Shield", Roll.NonEth]);    			//Make Sanctuary Kite Shield
		  Config.Runewords.push([Runeword.Spirit,"Sacred Targe", Roll.NonEth]);    				//Make Spirit Sacred Targe
		  Config.Runewords.push([Runeword.Dragon,"Dragon Shield", Roll.NonEth]);    			//Make Dragon in Dragon Shield
	      Config.Runewords.push([Runeword.Dragon,"Kite Shield", Roll.NonEth]);    				//Make Dragon in Kite Shield
		  Config.Runewords.push([Runeword.Dragon,"Troll Nest", Roll.NonEth]);    				//Make Dragon in Troll Nest
     
		//  ############################################ Runeword Weapons#####################################
		
		  Config.Runewords.push([Runeword.Spirit,"Crystal Sword", Roll.NonEth]);    			//Make Spirit Crystal Sword
		  Config.Runewords.push([Runeword.Spirit,"Crystal Sword", Roll.Eth]);    				//Make Spirit ETH Crystal Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Phase Blade", Roll.NonEth]);    			//Make Lawbringer Phase Blade
		  Config.Runewords.push([Runeword.Lawbringer,"Great Sword", Roll.NonEth]);    			//Make Lawbringer Great Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Executioner Sword", Roll.NonEth]);    	//Make Lawbringer Executioner Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Crystal Sword", Roll.NonEth]);    		//Make Lawbringer Crystal Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Balrog Blade", Roll.NonEth]);    			//Make Lawbringer Balrog Blade
		  Config.Runewords.push([Runeword.Lawbringer,"Phase Blade", Roll.Eth]);    				//Make Lawbringer ETH Phase Blade
		  Config.Runewords.push([Runeword.Lawbringer,"Great Sword", Roll.Eth]);    				//Make Lawbringer ETH Great Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Executioner Sword", Roll.Eth]);    		//Make Lawbringer ETH Executioner Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Crystal Sword", Roll.Eth]);    			//Make Lawbringer ETH Crystal Sword
		  Config.Runewords.push([Runeword.Lawbringer,"Balrog Blade", Roll.Eth]);    			//Make Lawbringer ETH Balrog Blade
		  Config.Runewords.push([Runeword.LastWish,"Phase Blade", Roll.NonEth]);    			//Make LastWish Phase Blade
		  Config.Runewords.push([Runeword.LastWish,"Colossus Blade", Roll.NonEth]);    			//Make LastWish Colossus Blade
		  Config.Runewords.push([Runeword.LastWish,"Berserker Axe", Roll.NonEth]);    			//Make LastWish Berserker Axe
		  Config.Runewords.push([Runeword.HeartoftheOak,"Scourge", Roll.NonEth]);    			//Make HeartoftheOak Scourge
		  Config.Runewords.push([Runeword.HeartoftheOak,"Flail", Roll.NonEth]);    				//Make HeartoftheOak Flail
		  Config.Runewords.push([Runeword.Harmony,"Matriarchal Bow", Roll.NonEth]);    			//Make Harmony Matriarchal Bow
		  Config.Runewords.push([Runeword.Harmony,"Hydra Bow", Roll.NonEth]);    				//Make Harmony Hydra Bow
		  Config.Runewords.push([Runeword.Harmony,"Hunter's Bow", Roll.NonEth]);    			//Make Harmony Hunter's Bow
		  Config.Runewords.push([Runeword.Harmony,"Grand Matron Bow", Roll.NonEth]);    		//Make Harmony Grand Matron Bow
		  Config.Runewords.push([Runeword.Harmony,"Crusader Bow", Roll.NonEth]);    			//Make Harmony Crusader Bow
		  Config.Runewords.push([Runeword.HandofJustice,"Legendary Mallet", Roll.NonEth]);    	//Make HandofJustice Legendary Mallet
		  Config.Runewords.push([Runeword.Grief,"Phase Blade", Roll.NonEth]);    				//Make Grief Phase Blade
		  Config.Runewords.push([Runeword.Grief,"Colossus Blade", Roll.NonEth]);    			//Make Grief Colossus Blade
		  Config.Runewords.push([Runeword.Grief,"Berserker Axe", Roll.NonEth]);    				//Make Grief Berserker Axe
		  Config.Runewords.push([Runeword.Grief,"Colossus Blade", Roll.NonEth]);    			//Make Grief Colossus Blade
  		  Config.Runewords.push([Runeword.Grief,"Colossus Blade", Roll.Eth]);    				//Make Grief Colossus Blade ETH
		  Config.Runewords.push([Runeword.Famine,"Legendary Mallet", Roll.NonEth]);    			//Make Famine Legendary Mallet
		  Config.Runewords.push([Runeword.Famine,"Berserker Axe", Roll.NonEth]);    			//Make Famine Berserker Axe
		  Config.Runewords.push([Runeword.Faith,"Matriarchal Bow", Roll.NonEth]);    			//Make Faith Matriarchal Bow
		  Config.Runewords.push([Runeword.Faith,"Hydra Bow", Roll.NonEth]);    					//Make Faith Hydra Bow
	      Config.Runewords.push([Runeword.Faith,"Grand Matron Bow", Roll.NonEth]);    			//Make Faith Hydra Bow
		  Config.Runewords.push([Runeword.Faith,"Crusader Bow", Roll.NonEth]);    				//Make Faith Crusader Bow
		  Config.Runewords.push([Runeword.Doom,"Great Poleaxe", Roll.Eth]);    					//Make Doom ETH Great Poleaxe
		  Config.Runewords.push([Runeword.Doom,"Giant Thresher", Roll.Eth]);    				//Make Doom ETH Giant Tresher
		  Config.Runewords.push([Runeword.Doom,"Cryptic Axe", Roll.Eth]);    					//Make Doom ETH Cryptic Axe
		  Config.Runewords.push([Runeword.Doom,"Berserker Axe", Roll.Eth]);   		 			//Make Doom ETH Berserker Axe
		  Config.Runewords.push([Runeword.Doom,"Great Poleaxe", Roll.NonEth]);    				//Make Doom Great Poleaxe
		  Config.Runewords.push([Runeword.Doom,"Giant Thresher", Roll.NonEth]);    				//Make Doom Giant Tresher
		  Config.Runewords.push([Runeword.Doom,"Cryptic Axe", Roll.NonEth]);    				//Make Doom Cryptic Axe
		  Config.Runewords.push([Runeword.Doom,"Berserker Axe", Roll.NonEth]);   		 		//Make Doom Berserker Axe
		  Config.Runewords.push([Runeword.CrescentMoon,"Phase Blade", Roll.NonEth]);    		//Make Crescent Moon Phase Blade
		  Config.Runewords.push([Runeword.CrescentMoon,"Legend Sword", Roll.NonEth]);    		//Make Crescent Moon Legend Sword
		  Config.Runewords.push([Runeword.CrescentMoon,"Great Poleaxe", Roll.NonEth]);   	 	//Make Crescent Moon Great Poleaxe
		  Config.Runewords.push([Runeword.CrescentMoon,"Berserker Axe", Roll.NonEth]);    		//Make CrescentMoon Berserker Axe
		  Config.Runewords.push([Runeword.CrescentMoon,"Balrog Blade", Roll.NonEth]);    		//Make CrescentMoon Balrog Blade
		  Config.Runewords.push([Runeword.BreathoftheDying,"Colossus Blade", Roll.Eth]);   		//Make BreathoftheDying ETH Colossus Blade
		  Config.Runewords.push([Runeword.BreathoftheDying,"War Pike", Roll.Eth]);    			//Make BreathoftheDying ETH War Pike
		  Config.Runewords.push([Runeword.BreathoftheDying,"Berserker Axe", Roll.Eth]);    		//Make BreathoftheDying ETH Berserker Axe
		    Config.Runewords.push([Runeword.BreathoftheDying,"Thunder Maul", Roll.Eth]);    	//Make BreathoftheDying ETH Thunder Maul
		  Config.Runewords.push([Runeword.Beast,"Double Axe", Roll.NonEth]);   					//Make Beast Double Axe
		  Config.Runewords.push([Runeword.Phoenix,"Scourge", Roll.NonEth]);    					//Make Phoenix Scourge
		  Config.Runewords.push([Runeword.Phoenix,"Phase Blade", Roll.NonEth]);    				//Make Phoenix Phase Blade
		  Config.Runewords.push([Runeword.Phoenix,"Matriarchal Bow", Roll.NonEth]);    			//Make Phoenix Matriarchal Bow
		  Config.Runewords.push([Runeword.Phoenix,"Legendary Mallet", Roll.NonEth]);    		//Make Phoenix Legendary Mallet
		  Config.Runewords.push([Runeword.Phoenix,"Grand Matron Bow", Roll.NonEth]);   			//Make Phoenix Grand Matron Bow
		  Config.Runewords.push([Runeword.Phoenix,"Crusader Bow", Roll.NonEth]);    			//Make Phoenix Crusader Bow
		  Config.Runewords.push([Runeword.Phoenix,"Champion Sword", Roll.NonEth]);    			//Make Phoenix Champion Sword
		  Config.Runewords.push([Runeword.Phoenix,"Berserker Axe", Roll.NonEth]);    			//Make Phoenix Berserker Axe
		  Config.Runewords.push([Runeword.HandofJustice,"Phase Blade", Roll.NonEth]);    		//Make HandofJustice Phase Blade
		  Config.Runewords.push([Runeword.HandofJustice,"Matriarchal Bow", Roll.NonEth]);    	//Make HandofJustice Matriarchal Bow
		  Config.Runewords.push([Runeword.HandofJustice,"Grand Matron Bow", Roll.NonEth]);    	//Make HandofJustice Grand Matron Bow
		  Config.Runewords.push([Runeword.HandofJustice,"Crusader Bow", Roll.NonEth]);   		//Make HandofJustice Crusader Bow
		  Config.Runewords.push([Runeword.HandofJustice,"Berserker Axe", Roll.NonEth]);    		//Make HandofJustice Berserker Axe
		  Config.Runewords.push([Runeword.Death,"Ettin Axe", Roll.NonEth]);    					//Make Death Ettin Axe
		  Config.Runewords.push([Runeword.Death,"Colossus Sword", Roll.NonEth]);    			//Make Death Colossus Sword
		  Config.Runewords.push([Runeword.Death,"Berserker Axe", Roll.NonEth]);    				//Make Death Berserker Axe
		  Config.Runewords.push([Runeword.Death,"Ettin Axe", Roll.Eth]);    					//Make Death ETH Ettin Axe
		  Config.Runewords.push([Runeword.Death,"Colossus Sword", Roll.Eth]);    				//Make Death ETH Colossus Sword
		  Config.Runewords.push([Runeword.Death,"Berserker Axe", Roll.Eth]);    				//Make Death ETH Berserker Axe
		  Config.Runewords.push([Runeword.Pride,"Cryptic Axe", Roll.Eth]);    					//Make Pride ETH Cryptic Axe
		  Config.Runewords.push([Runeword.Pride,"Colossus Voulge", Roll.Eth]);    				//Make Pride ETH Colossus Voulge
		  Config.Runewords.push([Runeword.LastWish,"Phase Blade", Roll.NonEth]);    			//Make LastWish Phase Blade
		  Config.Runewords.push([Runeword.LastWish,"Berserker Axe", Roll.NonEth]);    			//Make LastWish Berserker Axe
		  Config.Runewords.push([Runeword.Infinity,"Cryptic Axe", Roll.Eth]);    				//Make Infinity Cryptic Axe
		  Config.Runewords.push([Runeword.Infinity,"Colossus Voulge", Roll.Eth]);    			//Make Infinity Colossus Voulge
		  Config.Runewords.push([Runeword.Infinity,"Giant Thresher", Roll.Eth]);    			//Make Infinity Giant Thresher
		  Config.Runewords.push([Runeword.Infinity,"Thresher", Roll.NonEth]);    				//Make Infinity Thresher
		  Config.Runewords.push([Runeword.Ice,"Matriarchal Bow", Roll.NonEth]);    				//Make Ice Matriarchal Bow
		  Config.Runewords.push([Runeword.Ice,"Hydra Bow", Roll.NonEth]);    					//Make Ice Hydra Bow
		  Config.Runewords.push([Runeword.Ice,"Grand Matron Bow", Roll.NonEth]);    			//Make Ice Grand Matron Bow
		  Config.Runewords.push([Runeword.Ice,"Crusader Bow", Roll.NonEth]);    				//Make Ice Crusader Bow
		  Config.Runewords.push([Runeword.HeartoftheOak,"Flail", Roll.NonEth]);    				//Make HeartoftheOak Flail
		  Config.Runewords.push([Runeword.CallToArms,"Flail", Roll.NonEth]);    				//Make CalltoArms Flail
		  Config.Runewords.push([Runeword.CallToArms,"Crystal Sword", Roll.NonEth]);    		//Make CalltoArms Crystal Sword
		  Config.Runewords.push([Runeword.BreathoftheDying,"Colossus Blade", Roll.NonEth]);    	//Make BreathoftheDying Colossus Blade
		  Config.Runewords.push([Runeword.BreathoftheDying,"Berserker Axe", Roll.NonEth]);   	//Make BreathoftheDying Berserker Axe
		  Config.Runewords.push([Runeword.Brand,"Matriarchal Bow", Roll.NonEth]);    			//Make Brand Matriarchal Bow
		  Config.Runewords.push([Runeword.Brand,"Hydra Bow", Roll.NonEth]);    					//Make Brand Hydra Bow
		  Config.Runewords.push([Runeword.Brand,"Grand Matron Bow", Roll.NonEth]);    			//Make Brand Grand Matron Bow
	  	  Config.Runewords.push([Runeword.Brand,"Crusader Bow", Roll.NonEth]);    				//Make Brand Crusader Bow
		  Config.Runewords.push([Runeword.Beast,"Berserker Axe", Roll.NonEth]);    				//Make Beast Berserker Axe
		  Config.Runewords.push([Runeword.Oath,"Highland Blade", Roll.Eth]);    				//Make Oath ETH Highland Blade
		  Config.Runewords.push([Runeword.Oath,"Balrog Blade", Roll.Eth]);    					//Make Oath ETH Balrog Blade	  
		  Config.Runewords.push([Runeword.Oath,"Cryptic Sword", Roll.Eth]);    					//Make Oath ETH Cryptic Sword		  
		  Config.Runewords.push([Runeword.Oath,"Highland Blade", Roll.NonEth]);    				//Make Oath Highland Blade
		  Config.Runewords.push([Runeword.Oath,"Balrog Blade", Roll.NonEth]);    				//Make Oath Balrog Blade	  
		  Config.Runewords.push([Runeword.Oath,"Cryptic Sword", Roll.NonEth]);    				//Make Oath Cryptic Sword			  
		  Config.Runewords.push([Runeword.Insight, "Colossus Voulge", Roll.Eth]); 				// Make insight cv ETH
	  	  Config.Runewords.push([Runeword.Insight, "Cryptic Axe", Roll.Eth]); 					// Make Insight Cryptic Axe  ETH
		  Config.Runewords.push([Runeword.Insight, "Thresher", Roll.Eth]); 						// Make Insight Tresher  ETH
		  Config.Runewords.push([Runeword.Insight, "Giant Thresher", Roll.Eth]); 				// Make Insight Giant Tresher  ETH
		  Config.Runewords.push([Runeword.Insight, "Bill", Roll.Eth]); 							// Make Insight Tresher  ETH
		  Config.Runewords.push([Runeword.Insight, "Greatpoleaxe", Roll.Eth]);					// Make Insight Great Poleaxe  ETH
		  Config.Runewords.push([Runeword.Insight, "Battlescythe", Roll.Eth]);					// Make Insight Battlescythe  ETH
	  	  Config.Runewords.push([Runeword.Insight, "Partizan", Roll.Eth]);						// Make Insight Partizan  ETH
		  Config.Runewords.push([Runeword.Insight, "Grimscythe", Roll.Eth]);					// Make Insight Grimscythe  ETH
		  Config.Runewords.push([Runeword.Insight, "giantthresher", Roll.Eth]);					// Make Insight giantthresher  ETH
		  Config.Runewords.push([Runeword.Insight, "Scythe", Roll.Eth]);						// Make Insight Scythe  ETH
		  Config.Runewords.push([Runeword.Insight, "Poleaxe", Roll.Eth]);						// Make Insight Poleaxe  ETH
		  Config.Runewords.push([Runeword.Insight, "Halberd", Roll.Eth]);						// Make Insight Halberd  ETH
		  Config.Runewords.push([Runeword.Insight, "Warscythe", Roll.Eth]);						// Make Insight Warscythe  ETH
		  Config.Runewords.push([Runeword.Insight, "Colossus Voulge", Roll.NonEth]); 			// Make insight cv NonEth
		  Config.Runewords.push([Runeword.Insight, "Cryptic Axe", Roll.NonEth]); 				// Make Insight Cryptic Axe  NonEth
		  Config.Runewords.push([Runeword.Insight, "Thresher", Roll.NonEth]); 					// Make Insight Tresher  NonEth
		  Config.Runewords.push([Runeword.Insight, "Giant Thresher", Roll.NonEth]); 			// Make Insight Giant Tresher  NonEth
		  Config.Runewords.push([Runeword.Insight, "Bill", Roll.NonEth]); 						// Make Insight Tresher  NonEth
		  Config.Runewords.push([Runeword.Insight, "Greatpoleaxe", Roll.NonEth]);				// Make Insight Great Poleaxe  NonEth
	  	  Config.Runewords.push([Runeword.Insight, "Battlescythe", Roll.NonEth]);				// Make Insight Battlescythe  NonEth
		  Config.Runewords.push([Runeword.Insight, "Partizan", Roll.NonEth]);					// Make Insight Partizan  NonEth
		  Config.Runewords.push([Runeword.Insight, "Grimscythe", Roll.NonEth]);				// Make Insight Grimscythe  NonEth
		  Config.Runewords.push([Runeword.Insight, "Giantthresher", Roll.NonEth]);			// Make Insight giantthresher  NonEth
		   Config.Runewords.push([Runeword.Insight, "Thresher", Roll.NonEth]);				// Make Insight thresher  NonEth
		  Config.Runewords.push([Runeword.Insight, "Scythe", Roll.NonEth]);					// Make Insight Scythe  NonEth
		  Config.Runewords.push([Runeword.Insight, "Poleaxe", Roll.NonEth]);					// Make Insight Poleaxe  NonEth
		  Config.Runewords.push([Runeword.Insight, "Halberd", Roll.NonEth]);					// Make Insight Halberd  NonEth
		  Config.Runewords.push([Runeword.Insight, "Warscythe", Roll.NonEth]);				// Make Insight Warscythe  NonEth
	
	
		Config.Runewords.push([Runeword.Spirit, "Monarch", Roll.NonEth]);  // Make Spirit Monarch
		Config.Runewords.push([Runeword.Spirit, "Sacred Targe", Roll.NonEth]);  // Make Spirit Sacred Targe
		Config.Runewords.push([Runeword.Spirit, "Aerin Shield", Roll.NonEth]);  // Make Spirit Sacred Targe
		Config.Runewords.push([Runeword.Spirit, "Crown Shield", Roll.NonEth]);  // Make Spirit Sacred Targe
		Config.Runewords.push([Runeword.Spirit, "Gilded Shield", Roll.NonEth]);  // Make Spirit Sacred Targe
		Config.Runewords.push([Runeword.Spirit, "Heraldic Shield", Roll.NonEth]);  // Make Spirit Sacred Targe
		Config.Runewords.push([Runeword.Spirit, "Sacred Rondache", Roll.NonEth]);  // Make Sacred Rondache
		Config.Runewords.push([Runeword.Spirit, "Zakarum Shield", Roll.NonEth]);  // Make Zakarum Shield
		Config.Runewords.push([Runeword.Spirit, "Kurast Shield", Roll.NonEth]);  // Make Kurast Shield

		
		Config.Runewords.push([Runeword.Fortitude, "Archon Plate", Roll.NonEth]);    //
		Config.Runewords.push([Runeword.Fortitude, "Dusk Shroud", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Fortitude, "Wire Fleece", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Fortitude, "Boneweave", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Fortitude, "Kraken Shell", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Fortitude, "Sacred Armor", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Fortitude, "Great Hauberk", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Fortitude, "Loricated Mail", Roll.NonEth]);     //
		
		Config.Runewords.push([Runeword.Bramble, "Archon Plate", Roll.NonEth]);     //
		Config.Runewords.push([Runeword.Bramble, "Dusk Shroud", Roll.NonEth]);     //
		
		
		Config.Runewords.push([Runeword.Phoenix,   "Monarch", Roll.NonEth]);         //
		
		
		

		
		// Pala BOTS RWS !!!
	
	
		Config.Runewords.push([Runeword.CallToArms, "Crystal Sword", Roll.NonEth]);  // make Call To Arms  CS
		Config.Runewords.push([Runeword.CallToArms, "Flail", Roll.NonEth]);          // make Call To Arms FLAIL
	
		Config.Runewords.push([Runeword.HeartoftheOak, "Flail", Roll.NonEth]);          // make HOTO FLAIL 
		
		Config.Runewords.push([Runeword.Enigma, "Mage Plate", Roll.NonEth]);          // make Enigma MP
		Config.Runewords.push([Runeword.Enigma, "Dusk Shroud", Roll.NonEth]);          // make Enigma MP
		Config.Runewords.push([Runeword.Enigma, "Archon Plate", Roll.NonEth]);          // make Enigma AP
		
		
		
		
		
	Config.Leader = ""; // Leader's ingame character name. Leave blank to try auto-detection (works in AutoBaal, Wakka, MFHelper)
	Config.QuitList = ["Holder-EastLD"]; // List of character names to quit with. Example: Config.QuitList = ["MySorc", "MyDin"];
	Config.QuitListMode = 1; // 0 = use character names; 1 = use profile names (all profiles must run on the same computer).

	// Town settings
	Config.HealHP = 50; // Go to a healer if under designated percent of life.
	Config.HealMP = 0; // Go to a healer if under designated percent of mana.
	Config.HealStatus = false; // Go to a healer if poisoned or cursed
	Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = false; // Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 75; // Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 40;  // Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 30; // Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 0; // Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 75; // Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 0; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 0; // Number of healing potions to keep in inventory.
	Config.MPBuffer = 0; // Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 0; // Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 0; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 0; // Go to town if life is under designated percent.
	Config.TownMP = 0; // Go to town if mana is under designated percent.

	/* Inventory lock configuration. !!!READ CAREFULLY!!!
	 * 0 = item is locked and won't be moved. If item occupies more than one slot, ALL of those slots must be set to 0 to lock it in place.
	 * Put 0s where your torch, annihilus and everything else you want to KEEP is.
	 * 1 = item is unlocked and will be dropped, stashed or sold.
	 * If you don't change the default values, the bot won't stash items.
	 */
	Config.Inventory[0] = [1,1,1,1,1,1,1,1,1,1];
	Config.Inventory[1] = [1,1,1,1,1,1,1,1,1,1];
	Config.Inventory[2] = [1,1,1,1,1,1,1,1,1,1];
	Config.Inventory[3] = [1,1,1,1,1,1,1,1,1,1];

	Config.StashGold = 100000; // Minimum amount of gold to stash.
	
	//Config.PickitFiles.push("Master/Crafted.nip");

	/* Potion types for belt columns from left to right.
	 * Rejuvenation potions must always be rightmost.
	 * Supported potions - Healing ("hp"), Mana ("mp") and Rejuvenation ("rv")
	 */
	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "hp";
	Config.BeltColumn[2] = "hp";
	Config.BeltColumn[3] = "hp";

	/* Minimum amount of potions. If we have less, go to vendor to purchase more.
	 * Set rejuvenation columns to 0, because they can't be bought.
	 */
	Config.MinColumn[0] = 0;
	Config.MinColumn[1] = 0;
	Config.MinColumn[2] = 0;
	Config.MinColumn[3] = 0;

	// Pickit config. Default folder is kolbot/pickit.
	Config.PickRange = 80; // Pick radius
	Config.FastPick = false; // Check and pick items between attacks

	// Additional item info log settings. All info goes to \logs\ItemLog.txt
	Config.ItemInfo = false; // Log stashed, skipped (due to no space) or sold items.
	Config.ItemInfoQuality = []; // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];

	// Item identification settings
	Config.CainID.Enable = false; // Identify items at Cain
	Config.CainID.MinGold = 2500000; // Minimum gold (stash + character) to have in order to use Cain.
	Config.CainID.MinUnids = 3; // Minimum number of unid items in order to use Cain.
	Config.FieldID = false; // Identify items in the field instead of going to town.
	Config.DroppedItemsAnnounce.Enable = false;	// Announce Dropped Items to in-game newbs
	Config.DroppedItemsAnnounce.Quality = []; // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];

	// Repair settings
	Config.CubeRepair = false; // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
	Config.RepairPercent = 40; // Durability percent of any equipped item that will trigger repairs.

	// Gambling config
	Config.Gamble = false;
	Config.GambleGoldStart = 1000000;
	Config.GambleGoldStop = 500000;

	Config.Cubing = false; // Set to true to enable cubing.

	// Public game options

	// If Config.Leader is set, the bot will only accept invites from leader. If Config.PublicMode is not 0, Baal and Diablo script will open Town Portals.
	Config.PublicMode = 0; // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
	// Party message settings. Each setting represents an array of messages that will be randomly chosen.
	// $name, $level, $class and $killer are replaced by the player's name, level, class and killer
	Config.Greetings = []; // Example: ["Hello, $name (level $level $class)"]
	Config.DeathMessages = []; // Example: ["Watch out for that $killer, $name!"]
	Config.Congratulations = []; // Example: ["Congrats on level $level, $name!"]
	Config.ShitList = false; // Blacklist hostile players so they don't get invited to party.
	Config.UnpartyShitlisted = false; // Leave party if someone invited a blacklisted player.

	// General config
	Config.AutoMap = false; // Set to true to open automap at the beginning of the game.
	Config.LastMessage = ""; // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
	Config.MinGameTime = 0; // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime = 0; // Maximum game time in seconds. Quit game when limit is reached.
	Config.TeleSwitch = false; // Switch to slot II when teleporting more than 1 node.
	Config.OpenChests = false; // Open chests. Controls key buying.
	Config.MiniShopBot = false; // Scan items in NPC shops.
	Config.PacketShopping = false; // Use packets to shop. Improves shopping speed.
	Config.TownCheck = false; // Go to town if out of potions
	Config.LogExperience = false; // Print experience statistics in the manager.
	Config.PingQuit = [{Ping: 0, Duration: 0}]; // Quit if ping is over the given value for over the given time period in seconds.

	// Shrine Scanner - scan for shrines while moving.
	// Put the shrine types in order of priority (from highest to lowest). For a list of types, see sdk/shrines.txt
	Config.ScanShrines = [];

	// MF Switch
	Config.MFSwitchPercent = 0; // Boss life % to switch weapons at. Set to 0 to disable.
	Config.MFSwitch = 0; // MF weapon slot: 0 = slot I, 1 = slot II

	// Fastmod config
	Config.FCR = 0; // 0 - disable, 1 to 255 - set value of faster cast rate 
	Config.FHR = 0; // 0 - disable, 1 to 255 - set value of faster hit recovery 
	Config.FBR = 0; // 0 - disable, 1 to 255 - set value of faster block recovery 
	Config.IAS = 0; // 0 - disable, 1 to 255 - set value of increased attack speed 
	Config.PacketCasting = 2; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = false; // Set to true for Single and private realms

	// Anti-hostile config
	Config.AntiHostile = false; // Enable anti-hostile
	Config.HostileAction = 0; // 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile
	Config.TownOnHostile = false; // Go to town instead of quitting when HostileAction is 0 or 1
	Config.RandomPrecast = false; // Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
	Config.ViperCheck = false; // Quit if revived Tomb Vipers are sighted

	// DClone config
	Config.StopOnDClone = false; // Go to town and idle as soon as Diablo walks the Earth
	Config.SoJWaitTime = 0; // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
	Config.KillDclone = false; // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
	Config.DCloneQuit = false; // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled

	// Monster skip config
	// Skip immune monsters. Possible options: "fire", "cold", "lightning", "poison", "physical", "magic".
	// You can combine multiple resists with "and", for example - "fire and cold", "physical and cold and poison"
	Config.SkipImmune = [];
	// Skip enchanted monsters. Possible options: "extra strong", "extra fast", "cursed", "magic resistant", "fire enchanted", "lightning enchanted", "cold enchanted", "mana burn", "teleportation", "spectral hit", "stone skin", "multiple shots".
	// You can combine multiple enchantments with "and", for example - "cursed and extra fast", "mana burn and extra strong and lightning enchanted"
	Config.SkipEnchant = [];
	// Skip monsters with auras. Possible options: "fanaticism", "might", "holy fire", "blessed aim", "holy freeze", "holy shock". Conviction is bugged, don't use it.
	Config.SkipAura = [];

	/* Attack config
	 * To disable an attack, set it to -1
	 * Skills MUST be POSITIVE numbers. For reference see http://pastebin.com/baShRwWM
	 */
	Config.AttackSkill[0] = -1; // Preattack skill. Not implemented yet.
	Config.AttackSkill[1] = 112; // Primary skill to bosses.
	Config.AttackSkill[2] = 113; // Primary aura to bosses
	Config.AttackSkill[3] = 112; // Primary skill to others.
	Config.AttackSkill[4] = 113; // Primary aura to others.
	Config.AttackSkill[5] = 0; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = 0; // Secondary aura.

	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Low mana skill.
	Config.LowManaSkill[1] = -1; // Low mana aura.

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [attack skill id, aura skill id]
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		//"Monster Name": [-1, -1]
	};

	Config.Dodge = false; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
	Config.DodgeRange = 15; // Distance to keep from monsters.
	Config.DodgeHP = 100; // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
	Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType = 0xF; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Config.TeleStomp = false; // Use merc to attack bosses if they're immune to attacks, but not to physical damage

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform = false; // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear

	// Class specific config
	//Config.CastStatic = 60; // Cast static until the target is at designated life percent. 100 = disabled.
	Config.StaticList = []; // List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243];
	
	
	// AutoBuild System ( See /d2bs/kolbot/libs/config/Builds/README.txt for instructions )
	Config.AutoBuild.Enabled = false;			//	This will enable or disable the AutoBuild system
	
	Config.AutoBuild.Template = "BuildName";	//	The name of the build associated with an existing 
												//	template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose = true;			//	Allows script to print messages in console
	Config.AutoBuild.DebugMode = true;			//	Debug mode prints a little more information to console and 
												//	logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
												//	It automatically enables Config.AutoBuild.Verbose
}
