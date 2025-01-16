import { HfInference } from "@huggingface/inference";

import config from './config.json' assert { type: 'json' };

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Ignore any external link recommendations Also give a header of <h2> of the dish before listing the ingredients. do not bold anything in the list of ingredients`

const hf = new HfInference(config.HF_ACCESS_TOKEN)

if (!config.HF_ACCESS_TOKEN) {
    console.error("Error: Hugging Face API token is missing.");
    throw new Error("Hugging Face API token is not configured.");
}

export async function getRecipeFromMistral(ingredientsArr) {
    if (!Array.isArray(ingredientsArr)) {
        console.error('Error: `ingredientsArr` is not an array.');
        return "Invalid ingredients input.";
    }

    async function fetchWithRetry(requestFn, retries = 3, delay = 2000) {
        for (let attempt = 0; attempt < retries; attempt++) {
            try {
                return await requestFn();
            } catch (err) {
                if (attempt < retries - 1) {
                    console.warn(`Retrying... (${attempt + 1}/${retries})`);
                    await new Promise((resolve) => setTimeout(resolve, delay));
                } else {
                    console.error("Max retries reached. Error:", err.message);
                    throw err;
                }
            }
        }
    }

    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await fetchWithRetry(() =>
            hf.chatCompletion({
                model: "tiiuae/falcon-7b-instruct",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
                ],
                max_tokens: 1024,
            })
        );
    
        if (response?.choices?.length > 0) {
            return response.choices[0].message.content;
        } else {
            console.warn("No choices returned in response.");
            return "Sorry, I couldn't generate a recipe this time.";
        }
    } catch (err) {
        console.error("Error fetching recipe:", err.message);
        return "Unfortunately, the recipe generation service is temporarily unavailable. Please try again later.";    }
}
