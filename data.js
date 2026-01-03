const DEFAULT_TIMELINE = [
  { id:"awal", title:"Awal", date:"2025-03-03", memories:[] },
  { id:"meet", title:"Pertemuan Pertama", date:"2025-09-15", memories:[] },
  { id:"jacob", title:"Kajacob-Dejacob", date:"2025-09-26", memories:[] },
  { id:"dating", title:"Dating", date:"2025-10-21", memories:[] },
  { id:"ldr", title:"LDR", date:"2026-01-01", memories:[] }
];

function getTimeline(){
  let data = JSON.parse(localStorage.getItem("timeline"));
  if(!data){
    localStorage.setItem("timeline", JSON.stringify(DEFAULT_TIMELINE));
    return structuredClone(DEFAULT_TIMELINE);
  }

  // proteksi kalau ada data lama
  data.forEach(e=>{
    if(!e.memories) e.memories = [];
  });

  return data;
}

function saveTimeline(data){
  localStorage.setItem("timeline", JSON.stringify(data));
}
