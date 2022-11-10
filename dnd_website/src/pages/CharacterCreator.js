import React, { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import CharacterCreatorProfile from '../components/CharacterCreatorProfile';
import CharacterIconSelector from '../components/CharacterIconSelector';
import ClassCard from '../components/ClassCard';
import OptionSelector from '../components/OptionSelector';
import RaceCard from '../components/RaceCard';
import SearchBar from '../components/SearchBar';
import SpellCard from '../components/SpellCard';
import StatBlock from '../components/StatBlock';

import Axios from 'axios';

const CharacterCreator = (props) => {


  const [src,setSrc] = useState('')
  const [displayedIcon,setDisplayed] = useState(false)
  const [displayedRace,setDisplayedRace] = useState(false)
  const [displayedClass,setDisplayedClass] = useState(false)
  const [searchRace,setSearchRace] = useState('')
  const [searchClass,setSearchClass] = useState('')
  const raceSelected = useRef({})
  const classSelected = useRef({})
  
  const race = [
    {
      name:'Aarakocra',
      legacy:true,
      source:'Elemental Evil Player\'s Companion',
      src:'https://www.dndbeyond.com/avatars/9/360/636327455597709803.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Dragonborn',
      source:'Basic Rules / Players\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/361/636327455772826858.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Hill Dwarf',
      source:'Basic Rules / player\'s handbook',
      src:'https://www.dndbeyond.com/avatars/9/363/636327456259204263.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Mountain Dwarf',
      source:'Basic Rules / Players:\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/364/636327456390157492.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'High Elf',
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/366/636327456833931461.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Wood Elf',
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/367/636327456923059326.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Eldarin Elf',
      source:'Dungeon Master\'s Guide',
      src:'https://www.dndbeyond.com/avatars/2488/491/636680394055026157.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Air Genasi',
      legacy:true,
      source:'Elemental Evil Player\'s Companion',
      src:'https://www.dndbeyond.com/avatars/9/370/636327457415801351.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Earth Genasi',
      legacy:true,
      source:'Elemental Evil Player\'s Companion',
      src:'https://www.dndbeyond.com/avatars/9/371/636327457518792069.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Fire Genasi',
      legacy:true,
      source:'Elemental Evil Player\'s Companion',
      src:'https://www.dndbeyond.com/avatars/9/372/636327457599219038.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Water Genasi',
      legacy:true,
      source:'Elemental Evil Player\'s Companion',
      src:'https://www.dndbeyond.com/avatars/9/373/636327457695784458.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Rock Gnome',
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/375/636327458223897714.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Deep Gnome',
      legacy:true,
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/379/636327459112456155.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Goliath',
      legacy:true,
      source:'Elemental Evil Player\'s Companion',
      src:'https://www.dndbeyond.com/avatars/9/380/636327459782864316.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Half-Elf',
      source:'Basic Rules / player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/381/636327459940259125.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Half-Orc',
      source:'Basic Rules / player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/385/636327460616726799.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Lightfoot Halfing',
      source:'Basic Rules / player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/383/636327460327748907.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Stout Halfing',
      source:'Basic Rules / player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/384/636327460414027388.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Human',
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/386/636327460764467148.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Variant Human',
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/387/636327460929201730.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Tiefling',
      source:'Basic Rules / Player\'s Handbook',
      src:'https://www.dndbeyond.com/avatars/9/388/636327461109911160.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
    {
      name:'Variant Aasimar',
      source:'Dungeon Master\'s Guide',
      src:'https://www.dndbeyond.com/avatars/19/478/636383057404991541.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      description:'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
      racial_trait:'Flight, Talons',
      traits:{
        Ability_Score_Increase:'Your dexterity score increase by 2, and your Wisdom score increase by 1.',
        Age:'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
        Alignement:'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
        size:'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        speed:'Your base walking speed is 25 feet.',
        flight:'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        Talons:'Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        Languages:'You can speak, read, and write Common, Aarakocra, and Auran.'
      }
    },
  ];

  const classes = [
    {
      icon:'https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      name:'Barbarian',
      description:'A fierce warrior of primitive background who can enter a battle rage',
      hit_die:'d12',
      Primary_ability:'Strength',
      Saves:'Strength & Constitution',
      traits:{
        Rage:{
          level:'1st level',
          description:"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\n\n^You have advantage on Strength checks and Strength saving throws.^When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.^You have resistance to bludgeoning, piercing, and slashing damage.^If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        },
        Unarmored_Defence:{
          level:'1st level',
          description:'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
        },
        Reckless_Attack:{
          level:'2nd level',
          description:'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
        },
        Danger_Sense:{
          level:'2nd level',
          description:'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\n\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
        },
        Proficiencies:{
          level:'1st level',
          Armor:'Light armor, medium armor, shields',
          Weapons:'Simple weapons, martial weapons',
          Tools:'None',
          Saving_Throws:'Strength, Constitution',
          Skills:'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
        },
        Hit_Points:{
          level:'1st level',
          Hit_Dice:'1d12 per barbarian level',
          Hit_Points_at_first_Level:'12 + your Constitution modifier per barbarian level after the 1st'
        }
      }
    },
    {
      icon:'https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      name:'Bard',
      description:'An inspiring magician whose power echoes the music of creation',
      hit_die:'d8',
      Primary_ability:'Charisma',
      Saves:'Dexterity & Charisma',
      traits:{
        Rage:{
          level:'1st level',
          description:"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\n\n^You have advantage on Strength checks and Strength saving throws.^When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.^You have resistance to bludgeoning, piercing, and slashing damage.^If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        },
        Unarmored_Defence:{
          level:'1st level',
          description:'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
        },
        Reckless_Attack:{
          level:'2nd level',
          description:'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
        },
        Danger_Sense:{
          level:'2nd level',
          description:'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\n\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
        },
        Proficiencies:{
          level:'1st level',
          Armor:'Light armor, medium armor, shields',
          Weapons:'Simple weapons, martial weapons',
          Tools:'None',
          Saving_Throws:'Strength, Constitution',
          Skills:'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
        },
        Hit_Points:{
          level:'1st level',
          Hit_Dice:'1d12 per barbarian level',
          Hit_Points_at_first_Level:'12 + your Constitution modifier per barbarian level after the 1st'
        }
      }
    },
    {
      icon:'https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      name:'Cleric',
      description:'A fierce warrior of primitive background who can enter a battle rage',
      hit_die:'d12',
      Primary_ability:'Strength',
      Saves:'Strength & Constitution',
      traits:{
        Rage:{
          level:'1st level',
          description:"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\n\n^You have advantage on Strength checks and Strength saving throws.^When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.^You have resistance to bludgeoning, piercing, and slashing damage.^If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        },
        Unarmored_Defence:{
          level:'1st level',
          description:'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
        },
        Reckless_Attack:{
          level:'2nd level',
          description:'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
        },
        Danger_Sense:{
          level:'2nd level',
          description:'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\n\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
        },
        Proficiencies:{
          level:'1st level',
          Armor:'Light armor, medium armor, shields',
          Weapons:'Simple weapons, martial weapons',
          Tools:'None',
          Saving_Throws:'Strength, Constitution',
          Skills:'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
        },
        Hit_Points:{
          level:'1st level',
          Hit_Dice:'1d12 per barbarian level',
          Hit_Points_at_first_Level:'12 + your Constitution modifier per barbarian level after the 1st'
        }
      }
    },
    {
      icon:'https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      name:'Druid',
      description:'A fierce warrior of primitive background who can enter a battle rage',
      hit_die:'d12',
      Primary_ability:'Strength',
      Saves:'Strength & Constitution',
      traits:{
        Rage:{
          level:'1st level',
          description:"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\n\n^You have advantage on Strength checks and Strength saving throws.^When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.^You have resistance to bludgeoning, piercing, and slashing damage.^If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        },
        Unarmored_Defence:{
          level:'1st level',
          description:'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
        },
        Reckless_Attack:{
          level:'2nd level',
          description:'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
        },
        Danger_Sense:{
          level:'2nd level',
          description:'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\n\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
        },
        Proficiencies:{
          level:'1st level',
          Armor:'Light armor, medium armor, shields',
          Weapons:'Simple weapons, martial weapons',
          Tools:'None',
          Saving_Throws:'Strength, Constitution',
          Skills:'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
        },
        Hit_Points:{
          level:'1st level',
          Hit_Dice:'1d12 per barbarian level',
          Hit_Points_at_first_Level:'12 + your Constitution modifier per barbarian level after the 1st'
        }
      }
    },
    {
      icon:'https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp',
      name:'Fighter',
      description:'A fierce warrior of primitive background who can enter a battle rage',
      hit_die:'d12',
      Primary_ability:'Strength',
      Saves:'Strength & Constitution',
      traits:{
        Rage:{
          level:'1st level',
          description:"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\n\n^You have advantage on Strength checks and Strength saving throws.^When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.^You have resistance to bludgeoning, piercing, and slashing damage.^If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        },
        Unarmored_Defence:{
          level:'1st level',
          description:'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
        },
        Reckless_Attack:{
          level:'2nd level',
          description:'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
        },
        Danger_Sense:{
          level:'2nd level',
          description:'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\n\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
        },
        Proficiencies:{
          level:'1st level',
          Armor:'Light armor, medium armor, shields',
          Weapons:'Simple weapons, martial weapons',
          Tools:'None',
          Saving_Throws:'Strength, Constitution',
          Skills:'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
        },
        Hit_Points:{
          level:'1st level',
          Hit_Dice:'1d12 per barbarian level',
          Hit_Points_at_first_Level:'12 + your Constitution modifier per barbarian level after the 1st'
        }
      }
    },
  ]

  const backgrounds= [
    'Acolyte', 
    'Anthropologist', 
    'Archaeologist', 
    'Adopted', 
    'Black Fist Double Agent', 
    'Caravan Specialist', 
    'Charlatan', 
    'City Watch', 
    'Clan Crafter', 
    'Cloistered Scholar', 
    'Cormanthor Refugee', 
    'Courtier', 
    'Criminal', 
    'Dissenter', 
    'Dragon Casualty', 
    'Earthspur Miner', 
    'Entertainer', 
    'Faction Agent', 
    'Far Traveler', 
    'Folk Hero', 
    'Gate Urchin', 
    'Gladiator', 
    'Guild Artisan', 
    'Guild Merchant', 
    'Harborfolk', 
    'Haunted One', 
    'Hermit', 
    'Hillsfar Merchant', 
    'Hillsfar Smuggler', 
    'House Agent', 
    'Inheritor', 
    'Initiate', 
    'Inquisitor', 
    'Investigator',  
    'Iron Route Bandit', 
    'Knight', 
    'Knight of the Order', 
    'Mercenary Veteran', 
    'Mulmaster Aristocrat', 
    'Noble', 
    'Outlander', 
    'Phlan Insurgent', 
    'Phlan Refugee', 
    'Pirate', 
    'Sage', 
    'Sailor', 
    'Secret Identity', 
    'Shade Fanatic', 
    'Soldier', 
    'Spy', 
    'Student Of Magic', 
    'Stojanow Prisoner', 
    'Ticklebelly Nomad', 
    'Trade Sheriff', 
    'Urban Bounty Hunter', 
    'Urchin', 
    'Uthgardt Tribe Member', 
    'Vizier', 
    'Waterdhavian Noble', 
    'D&D Gladiator Arena'
  ];

  const [spellList,setSpellList] = useState()

  function getSpells(){
    Axios.get('http://localhost:3030/get-spells')
    .then(res=>{
      // console.log(res.data[0]);
      setSpellList(res.data[0])
    })
    .catch(err=>{

    })
  }

  function handleRaceSelection(value){
    raceSelected.current = value
  }

  function handleClassSelection(value){
    classSelected.current = value
  }


  function createRaces(){
    // return <RaceCard name="Name" src="" source="Hakuna matata"/>
    return race.map((item,index)=>{
      let exist = item.name.toUpperCase().includes(searchRace.toUpperCase()) || item.source.toUpperCase().includes(searchRace.toUpperCase())
      return(
        <div key={index+item.name}>
          {exist?<RaceCard setDisplayed={setDisplayedRace} handler={()=>handleRaceSelection(item)} key={index} name={item.name} legacy={item.legacy} source={item.source}  src={item.src} />:null}
        </div>
      )
    })
  }

  function createClasses(){
    return Object.keys(classes).map((item,index)=>{
      const current = classes[index]
      let exist = current.name.includes(searchClass)
      return(<div key={index}>
        {exist?<ClassCard setDisplayed={setDisplayedClass} handler={() => handleClassSelection(current)} title={current.name} src={current.icon}/>:null} 
      </div>)
    })
  }

  function createSpells(){
    if(spellList ){
      let spells= spellList.spells;
      return Object.keys(spells).map((item,index)=>{
        const current = spells[item]
        return <SpellCard name={current.name}  school={current.school} properties={current.properties} contenue={current.contenue} level={current.level} tags={current.tags} />
      })
      let properties = {Castin_Time:'1 action',Range__Area:'60 ft',Component:'V, S',Duration:'Instantaneous',Attack__Save:'DEX'}
      return <SpellCard name='Acid Splash' school='Conjuration' properties={properties} contenue='You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.`This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).' level='Cantrip' src='https://www.dndbeyond.com/Content/Skins/Waterdeep/images/spell-schools/35/conjuration.png' tags={['damage','social']} />
    }else{
      getSpells()
    }
  }

  function makeModifier(value){    
    let stat = Math.floor( (value - 10)/2 )
    return stat<0?stat:'+'+stat
  }

  function randomMinMax(min,max){
    return Math.floor(Math.random() * (max - min +1 ))+min
  }

  function rollStats(){
    let rolls = []
    for (let i = 0; i < 4; i++) {
        rolls.push(randomMinMax(0,6))            
    }
    rolls = rolls.sort().filter((_,i) => i) 

    return rolls.reduce((x,y) => {
        return x+y
    },0)
  }

  function makeStatBlock(){
    let array = Object.keys({str:'a',dex:'a',con:'a',int:'a',wis:'a',cha:'a',})
    return array.map((item,index) => {
        return(
            // console.log(item,index),
            <StatBlock key={index} name={item} 
            modifier={makeModifier(item)} 
            stat={0} rolling makeModifier={makeModifier} statRolling={rollStats}/>
        )
    })
  }

  useEffect(()=>{
    getSpells()
  },[])

  return(
    <div>
      {displayedIcon?<CharacterIconSelector title="MANAGE PORTRAIT" icon imgsrc={src} setSource={setSrc} setDisplayed={setDisplayed}/>:null}
      {displayedRace?<CharacterIconSelector title="COMFIRM RACE" values={raceSelected.current} race imgsrc={src} setSource={setSrc} setDisplayed={setDisplayedRace}/>:null}
      {displayedClass?<CharacterIconSelector title="CHOOSE CLASS" values={classSelected.current} class imgsrc={src} setSource={setSrc} setDisplayed={setDisplayedClass}/>:null}
      <div style={{width:'50%',position:'absolute',left:'50%',transform:'translate(-50%,0%)'}}>
        <Container fluid={false}>
          <div style={{display:'flex'}}>
            <CharacterCreatorProfile imgsrc={src} setDisplayed={setDisplayed}/>
            <div style={{margin: 'auto',marginTop: '2.5em'}}>
              <OptionSelector backgrounds={backgrounds} default='test'/>
            </div>
          </div>
          <br/>
          <div style={{marginBottom:'15px',display:'flex',justifyContent:'space-evenly'}}>
            {makeStatBlock()}
          </div>
          <SearchBar icon no_padding submenue={false} placeholder="Select a race" search={setSearchRace} />
          <div style={{height:'50vh',overflow:'auto',height:'50vh',}} className='mb-5 mt-4'>
            {createRaces()}
          </div>
          <SearchBar icon no_padding submenue={false} placeholder="Choose a class" search={setSearchClass} />
          <div style={{minHeight:'10vh',overflow:'auto',maxHeight:'50vh',}} className='mb-5 mt-4'>
          {createClasses()}
          </div>
          {true?
          <>
            <SearchBar icon no_padding submenue={false} placeholder="Search a spell" search={setSearchClass} />
            <div style={{minHeight:'10vh',overflow:'auto',maxHeight:'50vh',}} className='mb-5 mt-4'>
            {createSpells()}
            </div>
          </>
          :null}
        </Container>
      </div>
    </div>
  )

}

export default CharacterCreator;