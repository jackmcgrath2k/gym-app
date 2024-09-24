//Map artwork
import Map_Sunset from "../assets/imgs/Map_Sunset.png";
import Map_Split from "../assets/imgs/Map_Split.png";
import Map_Abyss from "../assets/imgs/Map_Abyss.png";
import Map_Ascent from "../assets/imgs/Map_Ascent.png";
import Map_Breeze from "../assets/imgs/Map_Breeze.png";
import Map_Bind from "../assets/imgs/Map_Bind.png";
import Map_Haven from "../assets/imgs/Map_Haven.png";
import Map_Icebox from "../assets/imgs/Map_Icebox.png";
import Map_Lotus from "../assets/imgs/Map_Lotus.png";
import Map_Pearl from "../assets/imgs/Map_Pearl.png";
import Map_Fracture from "../assets/imgs/Map_Fracture.png";

//Minimaps
import Mini_Sunset from "../assets/imgs/Mini_Sunset.png";
import Mini_Fracture from "../assets/imgs/Mini_Fracture.png";
import Mini_Ascent from "../assets/imgs/Mini_Ascent.png";
import Mini_Abyss from "../assets/imgs/Mini_Abyss.png";
import Mini_Split from "../assets/imgs/Mini_Split.png";
import Mini_Bind from "../assets/imgs/Mini_Bind.png";
import Mini_Breeze from "../assets/imgs/Mini_Breeze.png";
import Mini_Haven from "../assets/imgs/Mini_Haven.png";
import Mini_Pearl from "../assets/imgs/Mini_Pearl.png";
import Mini_Lotus from "../assets/imgs/Mini_Lotus.png";
import Mini_Icebox from "../assets/imgs/Mini_Icebox.png";

//Lore data
import Loredata from "../constants/Loredata.json"


export const Maps = [
    {
        title: "sunset",
        desc: "Home to the Kingdom West facility.",
        coords: "34°0202.0 N 118°1216.0 W",
        backgroundImage: Map_Sunset,
        miniBgImage: Mini_Sunset,
        lore: "info_sunset",
        loreInfo: Loredata.sunset,
        location:"Los Angeles",
        playRate:"14.3%",
        sideFav: "BOTH",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 
    },
    {
        title: "fracture",
        desc: "Abandoned development site for radianite particle study.",
        coords: "35°4818 N 106°0819 W",
        backgroundImage: Map_Fracture,
        miniBgImage: Mini_Fracture,
        lore: "info_fracture",
        loreInfo: Loredata.fracture,
        location:"New Mexico",
        playRate:"9.1%",
        sideFav: "OFFENSE",
        compRot: "NOT IN COMPETITIVE ROTATION",
        inRotation: false, 
    },
    {
        title: "ascent",
        desc: "Floating city of Venice impacted by Kingdom Corporation.",
        coords: "45°2551.1 N 12°2005.3 E",
        backgroundImage: Map_Ascent,
        miniBgImage: Mini_Ascent,
        lore: "info_ascent",
        loreInfo: Loredata.ascent,
        location:"Venice",
        playRate:"14.3%",
        sideFav: "DEFENSE",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 
    },
    {
        title: "breeze",
        desc: "Radianite mining facility based in the Carribbean.",
        coords: "26°1106 N 71°1031 W",
        backgroundImage: Map_Breeze,
        miniBgImage: Mini_Breeze,
        lore: "info_breeze",
        loreInfo: Loredata.breeze,
        location:"Carribbean",
        playRate:"9.0%",
        sideFav: "OFFENSE",
        compRot: "NOT IN COMPETITIVE ROTATION",
        inRotation: false, 
    },
    {
        title: "bind",
        desc: "Large radianite refining facility for Kingdom Corporation.",
        coords: "34°2A N 6°51Z W",
        backgroundImage: Map_Bind,
        miniBgImage: Mini_Bind,
        lore: "info_bind",
        loreInfo: Loredata.bind,
        location:"Los Angeles",
        playRate:"14.2%",
        sideFav: "DEFENSE",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 
    },
    {
        title: "split",
        desc: "Location of Kingdoms HQ and main research labs.",
        coords: "35°41CD N 139°41WX E",
        backgroundImage: Map_Split,
        miniBgImage: Mini_Split,
        lore: "info_split",
        loreInfo: Loredata.split,
        location:"Tokyo",
        playRate:"9.0%",
        sideFav: "DEFENSE",
        compRot: "NOT IN COMPETITIVE ROTATION",
        inRotation: false, 

    },
    {
        title: "abyss",
        desc: "Former base of Scions of Hourglass.",
        coords: "70°5009.0 N 9°0042.0 W",
        backgroundImage: Map_Abyss,
        miniBgImage: Mini_Abyss,
        lore: "info_abyss",
        loreInfo: Loredata.abyss,
        location:"Norway",
        playRate:"14.3%",
        sideFav: "OFFENSE",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 
    },
    {
        title: "lotus",
        desc: "Lost city with ties to a group known as 'The Astral Guardians'.",
        coords: "14°0703.4 N 74°5321.0 E",
        backgroundImage: Map_Lotus,
        miniBgImage: Mini_Lotus,
        lore: "info_lotus",
        loreInfo: Loredata.lotus,
        location:"?",
        playRate:"14.3%",
        sideFav: "OFFENSE",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 
    },
    {
        title: "pearl",
        desc: "Flooded city of Lisbon on OMEGA-Earth.",
        coords: "38°4205.4 N 9°0824.2 W",
        backgroundImage: Map_Pearl,
        miniBgImage: Mini_Pearl,
        lore: "info_pearl",
        loreInfo: Loredata.pearl,
        location:"Lisbon",
        playRate:"9.2%",
        sideFav: "BOTH",
        compRot: "NOT IN COMPETITIVE ROTATION",
        inRotation: false, 
    },
    {
        title: "icebox",
        desc: "Kingdom Corporations port and cold research facility.",
        coords: "76°44A N 149°30Z E",
        backgroundImage: Map_Icebox,
        miniBgImage: Mini_Icebox,
        lore: "info_icebox",
        loreInfo: Loredata.icebox,
        location:"Siberia",
        playRate:"NO DATA",
        sideFav: "NO DATA",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 

    },
    {
        title: "haven",
        desc: "Old monastery used for radianite storage.",
        coords: "27°28A N 89°38WZ E",
        backgroundImage: Map_Haven,
        miniBgImage: Mini_Haven,
        lore: "info_haven",
        loreInfo: Loredata.haven,
        location:"Bhutan",
        playRate:"14.4%",
        sideFav: "OFFENSE",
        compRot: "IN COMPETITIVE ROTATION",
        inRotation: true, 
    },

];


