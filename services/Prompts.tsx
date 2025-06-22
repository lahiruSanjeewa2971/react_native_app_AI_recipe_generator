export default {
  GENERATE_RECIPE_OPTION_PROMPT: `Depends on user instruction create 3 different Recipe variant with Recipe name with Emoji,
        2 line description and main ingredieant list in JSON format with field recipeName, description, ingredients (without size) only`,

  GENERATE_COMPLETE_RECIPE: `
        -As per recipe Name and Description, Give me all list of ingredients as ingredient,
        -emoji icons for each ingredient as icon, quantity as quantity, along with detail step by step recipe as steps,
        -Total calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo,
        -realistic image Text prompt as per recipe as imagePrompt,
        -Give me response in JSON format only.
    `,
};
