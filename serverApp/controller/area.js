const Area = require("../model/Area");

const areaContoller = {
  getAllArea: async (req, res) => {
    try {
      const country = [];
      const state1= [];
      const city1=[];

      const area = await Area.find({}).lean();
      if (!area) {
        res.status(404).send({
          message: "Area not found",
          status: 404,
        });
      } else {
        area.forEach((item) => {
          if (item.level===1) {
            //item.bind(state);
            item["state"] = [];
            country.push(item);
          } else if (item.level === 2) {
            item["city"] = [];
            state1.push(item);
          } else {
            city1.push(item);
          }
        });
        country.forEach((country)=>{
            state1.forEach((state1)=>{
                if(state1.parent_id==country.area_code)
                {
                    country.state.push(state1);
                }
                city1.forEach((city1)=>{
                    if(city1.parent_id==state1.area_code)
                    {
                        state1.city.push(city1);
                    }
                })
            })
        })
        res.json(country);
      }
    } catch (err) {
      res.status(404).send({
        message: "Area not found",
        status: 404,
      });
    }
  },
  mergeArea:async (req,res)=>{
    
  }
};

module.exports = areaContoller;
