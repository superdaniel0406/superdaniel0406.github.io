const __vite__fileDeps=["assets/Attractor-BbDkeEbB.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-B9EkVQ-c.js","assets/index-ClflmFyu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-B9EkVQ-c.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-BbDkeEbB.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
