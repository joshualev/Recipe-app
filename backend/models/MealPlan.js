const mongoose = require('mongoose');

const mealPlanSchema = mongoose.Schema(
{
  week: {  
    monday: {
        meals: [
              {id: Number, title: String, sourceUrl: String},
              {id: Number, title: String, sourceUrl: String},
              {id: Number, title: String, sourceUrl: String},
            ],
        nutrients: {
              calories: Number,
              protein: Number,
              fat: Number,
              carbohydrates: Number
        }
    },
    tuesday: {
      meals: [
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
          ],
      nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbohydrates: Number
        }
    },
    wednesday: {
      meals: [
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
          ],
      nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbohydrates: Number
      }
    },
    thursday: {
      meals: [
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
          ],
      nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbohydrates: Number
      }
    },
    friday: {
      meals: [
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
          ],
      nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbohydrates: Number
      }
    },
    saturday: {
      meals: [
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
          ],
      nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbohydrates: Number
      }
    },
    sunday: {
      meals: [
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
            {id: Number, title: String, sourceUrl: String},
          ],
      nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbohydrates: Number
      }
    },
  }
}
)

const MealPlan = mongoose.model("MealPlan", mealPlanSchema)

module.exports = MealPlan