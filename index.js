const  timezones = require("./timezones");

const getTime = (timezone_key) => {
  let timezone;
  if(timezone_key){
    const prefixs = ["Africa"];
    const prefixArr = timezone_key.split("/");
    if(!prefixs.includes(prefixArr[0]))
      throw new Error("Timezone prefix not found");
      
    timezone = timezones[prefixArr[0]][timezone_key];
  } else {
    timezone = timezones["UTC"]
  }

  if(!timezone)
    throw new Error("Timezone not found");

  const date = new Date();
  const dateUTC = new Date(Date.UTC(
    date.getUTCFullYear(), 
    date.getUTCMonth(), 
    date.getUTCDate(), 
    date.getUTCHours(), 
    date.getUTCMinutes(), 
    date.getUTCSeconds(), 
    date.getUTCMilliseconds()
  ));
  
  if(!timezone_key){
    return {
      ...timezone,
      time: dateUTC,
    }
  }

  dateUTC.setHours(dateUTC.getHours() + timezone.gmt);

  return {
    ...timezone,
    time: dateUTC,
  };
}

module.exports = {
  getTime
}