import OpenAI from "openai";

export default async function handler(req, res) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Input from curl (GET or POST)
  const input = req.query.q || req.body?.q || "hello";

  // Call your workflow (replace model with your workflow ID)
  const result = await client.responses.create({
    model: "wf_6929821d83cc8190bc028c11ffb685980e62fcdb1ec817f7",
    input
  });

  res.json(result.output_text);
}
