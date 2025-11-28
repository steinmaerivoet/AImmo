import OpenAI from "openai";

export default async function handler(req, res) {
  console.log("➡️ Function triggered");

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const input = req.query.q || "hello";

    console.log("➡️ Calling workflow with input:", input);

    const response = await client.responses.create({
      model: "wf_6929821d83cc8190bc028c11ffb685980e62fcdb1ec817f7",
      input
    });

    console.log("➡️ Workflow responded:", JSON.stringify(response, null, 2));

    res.status(200).json({ output: response.output_text });
  } catch (err) {
    console.error("❌ ERROR:", err);
    res.status(500).json({ error: err.message, stack: err.stack });
  }
}