//rh.base,js
//base function for rh

function rh(){
  this.canvas = arguments[0];
  this.rhAddon = [];
  try{
    this.registerAddon("rhRender");
    this.registerAddon("rhInputs");
  }
}
rh.prototype.registerAddon = function(addonName){
  var validAddon = typeof window[addonName] === "object";
  if(validAddon){
    this.rhAddon.push([new window[addonName].addon(),window[addonName].manifest]);
  }
  return !!this.rhAddon[this.rhAddon.length-1].isLoaded;
};
