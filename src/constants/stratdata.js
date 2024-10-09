//Agents Photos
import A_Astra from "../assets/imgs/agents/A_Astra.png";
import A_Breach from "../assets/imgs/agents/A_Breach.png";
import A_Brimstone from "../assets/imgs/agents/A_Brimstone.png";
import A_Chamber from "../assets/imgs/agents/A_Chamber.png";
import A_Clove from "../assets/imgs/agents/A_Clove.png";
import A_Cypher from "../assets/imgs/agents/A_Cypher.png";
import A_Deadlock from "../assets/imgs/agents/A_Deadlock.png";
import A_Fade from "../assets/imgs/agents/A_Fade.png";
import A_Gekko from "../assets/imgs/agents/A_Gekko.png";
import A_Harbor from "../assets/imgs/agents/A_Harbor.png";
import A_Iso from "../assets/imgs/agents/A_Iso.png";
import A_Jett from "../assets/imgs/agents/A_Jett.png";
import A_KAYO from "../assets/imgs/agents/A_KAYO.png";
import A_KJ from "../assets/imgs/agents/A_KJ.png";
import A_Neon from "../assets/imgs/agents/A_Neon.png";
import A_Omen from "../assets/imgs/agents/A_Omen.png";
import A_Phoenix from "../assets/imgs/agents/A_Phoenix.png";
import A_Raze from "../assets/imgs/agents/A_Raze.png";
import A_Reyna from "../assets/imgs/agents/A_Reyna.png";
import A_Sage from "../assets/imgs/agents/A_Sage.png";
import A_Skye from "../assets/imgs/agents/A_Skye.png";
import A_Sova from "../assets/imgs/agents/A_Sova.png";
import A_Viper from "../assets/imgs/agents/A_Viper.png";
import A_VYSE from "../assets/imgs/agents/A_VYSE.png";
import A_Yoru from "../assets/imgs/agents/A_Yoru.png";

//Agent slider display images
import A_Astra_disp from "../assets/imgs/agents/A_Astra_disp.png";
import A_Breach_disp from "../assets/imgs/agents/A_Breach_disp.png";
import A_Brimstone_disp from "../assets/imgs/agents/A_Brimstone_disp.png";
import A_Chamber_disp from "../assets/imgs/agents/A_Chamber_disp.png";
import A_Clove_disp from "../assets/imgs/agents/A_Clove_disp.png";
import A_Cypher_disp from "../assets/imgs/agents/A_Cypher_disp.png";
import A_Deadlock_disp from "../assets/imgs/agents/A_Deadlock_disp.png";
import A_Fade_disp from "../assets/imgs/agents/A_Fade_disp.png";
import A_Gekko_disp from "../assets/imgs/agents/A_Gekko_disp.png";
import A_Harbor_disp from "../assets/imgs/agents/A_Harbor_disp.png";
import A_Iso_disp from "../assets/imgs/agents/A_Iso_disp.png";
import A_Jett_disp from "../assets/imgs/agents/A_Jett_disp.png";
import A_KAYO_disp from "../assets/imgs/agents/A_KAYO_disp.png";
import A_KJ_disp from "../assets/imgs/agents/A_KJ_disp.png";
import A_Neon_disp from "../assets/imgs/agents/A_Neon_disp.png";
import A_Omen_disp from "../assets/imgs/agents/A_Omen_disp.png";
import A_Phoenix_disp from "../assets/imgs/agents/A_Phoenix_disp.png";
import A_Raze_disp from "../assets/imgs/agents/A_Raze_disp.png";
import A_Reyna_disp from "../assets/imgs/agents/A_Reyna_disp.png";
import A_Sage_disp from "../assets/imgs/agents/A_Sage_disp.png";
import A_Skye_disp from "../assets/imgs/agents/A_Skye_disp.png";
import A_Sova_disp from "../assets/imgs/agents/A_Sova_disp.png";
import A_Viper_disp from "../assets/imgs/agents/A_Viper_disp.png";
import A_VYSE_disp from "../assets/imgs/agents/A_VYSE_disp.png";
import A_Yoru_disp from "../assets/imgs/agents/A_Yoru_disp.png";

//Strats data


import { Maps } from "../constants/index.js"

//filter strats through here?
export const agentInfo = [
//Implement "role: "sentinel"" etc for further filtering options

    {
        a_name: "Astra",
        img: A_Astra,
        disp: A_Astra_disp,
        role: "Controller",
       

    },
    {
        a_name: "Breach",
        img: A_Breach,
        disp: A_Breach_disp,
        role: "Initiator",
       
    },
    {
        a_name: "Brimstone",
        img: A_Brimstone,
        disp: A_Brimstone_disp,
        role: "Controller",
       
    },
    {
        a_name: "Chamber",
        img: A_Chamber,
        disp: A_Chamber_disp,
        role: "Sentinel",
       
    },
    {
        a_name: "Clove",
        img: A_Clove,
        disp: A_Clove_disp,
        role: "Controller",
       
    },
    {
        a_name: "Cypher",
        img: A_Cypher,
        disp: A_Cypher_disp,
        role: "Sentinel",
       
    },
    {
        a_name: "Deadlock",
        img: A_Deadlock,
        disp: A_Deadlock_disp,
        role: "Sentinel",
       
    },
    {
        a_name: "Fade",
        img: A_Fade,
        disp: A_Fade_disp,
        role: "Initiator",
      
    },
    {
        a_name: "Gekko",
        img: A_Gekko,
        disp: A_Gekko_disp,
        role: "Initiator",
      
    },
    {
        a_name: "Harbor",
        img: A_Harbor,
        disp: A_Harbor_disp,
        role: "Controller",
      
    },
    {
        a_name: "Iso",
        img: A_Iso,
        disp: A_Iso_disp,
        role: "Duelist",
      
    },
    {
        a_name: "Jett",
        img: A_Jett,
        disp: A_Jett_disp,
        role: "Duelist",
     
    },
    {
        a_name: "KAYO",
        img: A_KAYO,
        disp: A_KAYO_disp,
        role: "Initiator",
     
    },
    {
        a_name: "Killjoy",
        img: A_KJ,
        disp: A_KJ_disp,
        role: "Sentinel",
   
    },
    {
        a_name: "Neon",
        img: A_Neon,
        disp: A_Neon_disp,
        role: "Duelist",
     
    },
    {
        a_name: "Omen",
        img: A_Omen,
        disp: A_Omen_disp,
        role: "Controller",
     
    },
    {
        a_name: "Phoenix",
        img: A_Phoenix,
        disp: A_Phoenix_disp,
        role: "Duelist",
     
    },
    {
        a_name: "Raze",
        img: A_Raze,
        disp: A_Raze_disp,
        role: "Duelist",
    
    },
    {
        a_name: "Reyna",
        img: A_Reyna,
        disp: A_Reyna_disp,
        role: "Duelist",
     
    },
    {
        a_name: "Sage",
        img: A_Sage,
        disp: A_Sage_disp,
        role: "Sentinel",
     
    },
    {
        a_name: "Skye",
        img: A_Skye,
        disp: A_Skye_disp,
        role: "Initiator",

        
    },
    {
        a_name: "Sova",
        img: A_Sova,
        disp: A_Sova_disp,
        role: "Initiator",

    },
    {
        a_name: "VYSE",
        img: A_VYSE,
        disp: A_VYSE_disp,
        role: "Sentinel",
      
    },
    {
        a_name: "Viper",
        img: A_Viper,
        disp: A_Viper_disp,
        role: "Controller",
       
    },
    {
        a_name: "Yoru",
        img: A_Yoru,
        disp: A_Yoru_disp,
        role: "Duelist",
       
    },

];


//This took forever

export const strategies = {
    "Astra": {    //Astra
        "sunset": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "fracture": {
            offense: [
              "test",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "ascent": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "breeze": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "bind": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "split": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "abyss": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "lotus": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "pearl": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "icebox": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
        "haven": {
            offense: [
              "Hold the angle at A site.",
              "Use utility to control mid.",
            ],
            defense: [
              "Watch for flanks from B.",
              "Use smokes to block vision."
            ],
        },
    }
}


// individual: ['Brimstone','Viper','Omen','Killjoy','Cypher','Sova','Sage','Phoenix','Jett','Reyna','Raze','Breach','Skye','Yoru','Astra','KAY/O','Chamber','Neon','Fade','Harbor','Gekko','Deadlock','Iso','Clove','VYSE'],
    

/* 

    "controller"_agents: 
    {
        "controller"s: ['Astra', 'Brimstone', 'Clove', 'Harbor', 'Omen', 'Viper']
    },

    "duelist"_agents: 
    {
    "duelist"s: ['Iso','Jett','Neon','Phoenix','Raze','Reyna','Yoru']
    },

    "initiator"_agents:
    {
    "initiator"s: ['Breach','Fade','Gekko','KAY/O','Skye','Sova']
    },
    
    "sentinel"_agents: 
    {
    "sentinel"s: ['Chamber','Cypher','Deadlock','Killjoy','Sage','VYSE']
    }

*/