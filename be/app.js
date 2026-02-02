// import dotenv from "dotenv";
// import express from 'express'
// import cors from 'cors';
// import connection from "./config/db.js";
// import boltSystemPrompt from "./src/prompts/boltsystem.js";
// import templates from "./src/default/index.js";
// import axios from "axios";
// // console.log("APP.JS LOCATION:", import.meta.url);
// // app.use(express.urlencoded({ extended: true }));

// const app=express()
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:5173" }));

// // app.use(cors())
// app.use(express.json())


// dotenv.config()
// connection()
// const PORT=process.env.PORT||3000
// // console.log(process.env.GROQ_KEY)


// import OpenAI from "openai";
// import { Content } from "openai/resources/containers/files/content.mjs";
// const client = new OpenAI({
//     apiKey: process.env.GROQ_KEY,
//     baseURL: "https://api.groq.com/openai/v1",
// });

// app.post("/api",async(req,res)=>{
//     try{
//         const {prompt}=req.body
//         if(!prompt){
//             return res.status(400).json({
//                 message:'write the prompt'
//             })
//         }
//         const response=await client.chat.completions.create({
//             model:"llama-3.1-8b-instant",
//             messages:[{role:"user",content:prompt}]
//         })
//         res.json({succes:true,reply:response.choices[0].message.content})

//     }catch(error){
//         res.status(500).json({
//             sucess:false,
//             error:error.message
//         })
    

//     }
// })


// // app.post("/api/stream",async(req,res)=>{
// //     try{
// //         const {prompt}=req.body
// //         if(!prompt){
// //             return res.status(400).json({
// //                 message:"prompt is not present"
// //             })
// //             res.setHeader("Content-Type", "text/plain; charset=utf-8");
// //             res.setHeader("Transfer-Encoding", "chunked");
// //         }
// //         const stream=await client.chat.completions.create({
// //             model:"llama-3.1-8b-instant",
// //             messages:[{role:"user",content:prompt}],
// //             stream:true
// //         })
// //         for await(const chunk of stream){
// //             const token=chunk.choices[0]?.delta?.content
// //             if(token){
// //                 res.write()
// //             }
// //         }
// //         res.end()


// //     }catch(error){
// //         console.error(error)
// //         res.status(500).end('streaming is end')

// //     }
// // })








// // app.post("/api/stream",async(req,res)=>{
// //     try{
// //         const {prompt}=req.body
// //         if(!prompt){
// //             return res.status(400).json({
// //                 message:"prompt is not present"
// //             })
// //             res.setHeader("Content-Type", "text/plain; charset=utf-8");
// //             res.setHeader("Transfer-Encoding", "chunked");
// //         }
// //         const stream=await client.chat.completions.create({
// //             model:"llama-3.1-8b-instant",
// //             messages:[{role:"user",content:prompt}],
// //             stream:true
// //         })
// //         for await(const chunk of stream){
// //             const token=chunk.choices[0]?.delta?.content
// //              if(token){
// //                 res.write()

// //             // if (token && typeof token.content === "string") {
// //             //    res.write(token.content);
// //             //  }  
// //             // if(token){
// //             //     res.write()
// //             }
// //         }
// //         res.end()


// //     }catch(error){
// //         console.error(error)
// //         res.status(500).end('streaming is end')

// //     }
// // })
// app.post("/api/stream", async (req, res) => {
//     try {
//         const { prompt } = req.body;
//         if (!prompt) {
//             return res.status(400).json({ message: "prompt is not present" });
//         }

//         res.setHeader("Content-Type", "text/plain; charset=utf-8");
//         res.setHeader("Transfer-Encoding", "chunked");

//         const stream = await client.chat.completions.create({
//             model: "llama-3.1-8b-instant",
//             messages: [{ role: "user", content: prompt }],
//             stream: true,
//         });

//         for await (const chunk of stream) {
//             const token = chunk.choices[0]?.delta?.content;
//             if (token) {
//                 res.write(token);  // ✅ Always a string
//             }
//         }

//         res.end(); // Finish streaming

//     } catch (error) {
//         console.error(error);
//         res.status(500).end("Streaming ended due to error");
//     }
// });



// // app.post("/api/bolt",async(req,res)=>{
// //     try{
// //         const {prompt}=req.body
// //         if(!prompt){
// //             return res.status(400).json({
// //                 message:"prompt is required"
// //             })
// //         }
// //         const response=await client.chat.completions.create({
// //             model:"llama-3.1-8b-instant",
// //             messages:[
// //                 {role:"system",content:boltSystemPrompt},
// //                 {role:"user",content:prompt}
// //             ],
// //             temperature:0.2
// //             })
// //             const output=response.choices[0].message.content
// //             console.log(output)
// //             let project;

// //     try {
// //       project = JSON.parse(output);
// //     } catch (parseError) {
// //       console.error(" JSON PARSE FAILED");
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid JSON from AI",
// //         output
// //       });
// //     }


// //     const selectedtemplates=templates[project.template]
// //     if(!selectedtemplates){
// //         return res.status(400).json({
// //             success:false,
// //             message:"templates is not found"
// //         })
// //     }

// //     const finalProject = {
// //       name: project.template,
// //       files: [
// //         ...selectedtemplates.files,
// //         ...(project.files || [])
// //       ]
// //     };



// //     res.json({
// //       success: true,
// //       project:finalProject
// //     })


// //     }catch(error){
// //         console.error(error)
// //         res.status(500).json({
// //             succes:false
// //         })

// //     }
// // })



// app.post('/hi',(req,res)=>{
//     res.json({
//         name:"ankita",
//         age:22
        

//     })
// })





// console.log("🚀 bolt route registering");
// function safeJSONParse(text) {
//   try {
//     return JSON.parse(text);
//   } catch {
//     // Try to clean common AI mistakes
//     let cleaned = text
//       .trim()
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .replace(/\n/g, "\\n")
//       .replace(/\r/g, "")
//       .replace(/\t/g, "")
//       .replace(/\\\\"/g, '\\"');

//     return JSON.parse(cleaned);
//   }
// }






// app.post("/api/bolt", async (req, res) => {
//   try {
//     console.log("🔥 /api/bolt HIT");

//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ message: "prompt is required" });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [
//         { role: "system", content: boltSystemPrompt },
//         { role: "user", content: prompt }
//       ],
//       temperature: 0.2
//     });

//     const output = response.choices[0].message.content;
//     console.log(output)

//     let project;
//     try {
//       project = JSON.parse(output);
//     } catch {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid JSON from AI",
//         output
//       });
//     }

//     const selectedTemplate = templates[project.template];
//     if (!selectedTemplate) {
//       return res.status(400).json({
//         success: false,
//         message: "Template not found"
//       });
//     }

//     const finalProject = {
//       name: project.template,
//       files: [
//         ...selectedTemplate.files,
//         ...(project.files || [])
//       ]
//     };

//     res.json({
//       success: true,
//       project: finalProject
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });






// // app.post("/api/bolt", async (req, res) => {
// //   try {
// //     const { prompt } = req.body;

// //     if (!prompt) {
// //       return res.status(400).json({ message: "prompt is required" });
// //     }

// //     const response = await client.chat.completions.create({
// //       model: "llama-3.1-8b-instant",
// //       messages: [
// //         { role: "system", content: boltSystemPrompt },
// //         { role: "user", content: prompt }
// //       ],
// //       temperature: 0.2
// //     });

// //     const output = response.choices[0].message.content;

// //     let project;
// //     try {
// //       project = JSON.parse(output);
// //     } catch {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid JSON from AI",
// //         output
// //       });
// //     }

// //     const selectedTemplate = templates[project.template];

// //     if (!selectedTemplate) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Template not found"
// //       });
// //     }

// //     const finalProject = {
// //       name: project.template,
// //       files: [
// //         ...selectedTemplate.files,
// //         ...(project.files || [])
// //       ]
// //     };

// //     res.json({
// //       success: true,
// //       project: finalProject
// //     });

// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false });
// //   }
// // });


// app.get("/api/news", async (req, res) => {
//   try {
//     const response = await fetch(
//       "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10"
//     );

//     const data = await response.json();

//     const news = data.hits.map(item => ({
//       title: item.title,
//       url: item.url,
//       author: item.author,
//       source: "Hacker News"
//     }));

//     res.json({ success: true, news });

//   } catch (err) {
//     res.status(500).json({ success: false });
//   }
// });




// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "Frontend ↔ Backend connected 🎉"
//   });
// });




// app.listen(PORT,()=>{
//     console.log(`server start on http://localhost:${PORT}`)
// })


// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import connection from "./config/db.js";
// import boltSystemPrompt from "./src/prompts/boltsystem.js";
// import templates from "./src/default/index.js";
// import OpenAI from "openai";
// // import genratelimit from "./server/routess/generate.js"
// // import { generatelimiter } from "./server/routess/generate.js";


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ---------------- MIDDLEWARE ----------------
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:5173" }));
// // app.use("/api", generatelimiter);

// // ---------------- DB ----------------
// connection();

// // ---------------- OPENAI (GROQ) ----------------
// const client = new OpenAI({
//   apiKey: process.env.GROQ_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });

// // ---------------- HEALTH CHECK ----------------
// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "Frontend ↔ Backend connected 🎉",
//   });
// });

// // ---------------- SIMPLE CHAT API ----------------
// app.post("/api", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ message: "Prompt is required" });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//     });

//     res.json({
//       success: true,
//       reply: response.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });

// // ---------------- BOLT API (IMPORTANT) ----------------
// console.log("🚀 bolt route registering");

// // function extractJSON(text) {
// //   const start = text.indexOf("{");
// //   const end = text.lastIndexOf("}");
// //   if (start === -1 || end === -1) return null;
// //   return text.slice(start, end + 1);
// // }
// // ---------------- UTILS ----------------
// // function extractJSON(text) {
// //   const start = text.indexOf("{");
// //   const end = text.lastIndexOf("}");
// //   if (start === -1 || end === -1) return null;
// //   return text.slice(start, end + 1);
// // }

// app.post("/api/bolt", async (req, res) => {
//   try {
//     console.log("🔥 /api/bolt HIT");

//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ message: "prompt is required" });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       temperature: 0,
//       messages: [
//         { role: "system", content: boltSystemPrompt },
//         { role: "user", content: prompt },
//       ],
//     });

// //     const rawOutput = response.choices[0].message.content;
// //     console.log("RAW AI OUTPUT:\n", rawOutput);

// //     const jsonText = extractJSON(rawOutput);
// //     if (!jsonText) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "AI did not return JSON",
// //         rawOutput,
// //       });
// //     }

// //     // const rawOutput = response.choices[0].message.content;

// // l



    

// //    let project;
// //     try {
// //       project = JSON.parse(jsonText);
// //     } catch (err) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "JSON parse failed",
// //         rawOutput,
// //       });
// //     }

// const rawOutput = response.choices[0].message.content;

// let project;
// try {
//   project = JSON.parse(rawOutput);
// } catch (err) {
//   console.error("INVALID JSON FROM AI:", rawOutput);
//   return res.status(400).json({
//     success: false,
//     message: "AI returned invalid JSON",
//   });
// }


//     // const baseTemplate = templates[project.template];
//     // if (!baseTemplate) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "Template not found",
//     //   });
//     // }

//     // const finalProject = {
//     //   name: project.template,
//     //   files: [...baseTemplate.files, ...(project.files || [])],
//     // };

//     res.json({
//   success: true,
//   project,
// });


//     res.json({
//       success: true,
//       project: finalProject,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });

// // ---------------- SERVER ----------------
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import connection from "./config/db.js";
// import boltSystemPrompt from "./src/prompts/boltsystem.js";
// import OpenAI from "openai";
// import { extractJSON } from "./src/utils/extractJson.js";


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ---------------- MIDDLEWARE ----------------
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:5173" }));

// // ---------------- DB ----------------
// connection();

// // ---------------- OPENAI (GROQ) ----------------
// const client = new OpenAI({
//   apiKey: process.env.GROQ_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });

// // ---------------- HEALTH CHECK ----------------
// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "Frontend ↔ Backend connected 🎉",
//   });
// });

// // ---------------- SIMPLE CHAT ----------------
// app.post("/api", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ message: "Prompt is required" });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//     });

//     res.json({
//       success: true,
//       reply: response.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });

// // ---------------- BOLT API ----------------
// app.post("/api/bolt", async (req, res) => {
//   try {
//     console.log("🔥 /api/bolt HIT");

//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ message: "prompt is required" });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       temperature: 0,
//       messages: [
//         { role: "system", content: boltSystemPrompt },
//         { role: "user", content: prompt },
//       ],
//     });

//     const rawOutput = response.choices[0].message.content;
//     console.log("RAW AI OUTPUT:\n", rawOutput);

//     let project;
//     try {
//       project = JSON.parse(rawOutput);
//     } catch (err) {
//       console.error("INVALID JSON FROM AI:", rawOutput);
//       return res.status(400).json({
//         success: false,
//         message: "AI returned invalid JSON",
//       });
//     }

//     return res.json({
//       success: true,
//       project,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });

// // ---------------- SERVER ----------------
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import connection from "./config/db.js";
import boltSystemPrompt from "./src/prompts/boltsystem.js";
import rateLimit from "express-rate-limit";
// import { extractJSON } from "./src/utils/extractJson.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------- MIDDLEWARE ----------------
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// ---------------- DB ----------------
connection();


const boltLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // 5 requests per IP per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests. Please wait and try again.",
  },
});

// ---------------- OPENAI (GROQ) ----------------
const client = new OpenAI({
  apiKey: process.env.GROQ_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// ---------------- HEALTH CHECK ----------------
// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "Frontend ↔ Backend connected 🚀",
//   });
// });

// // ---------------- BOLT API ----------------
// app.post("/api/bolt", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({
//         success: false,
//         message: "Prompt is required",
//       });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       temperature: 0,
//       messages: [
//         { role: "system", content: boltSystemPrompt },
//         { role: "user", content: prompt },
//       ],
//     });

//     const rawOutput = response.choices[0].message.content;
//     console.log("🤖 RAW AI OUTPUT:\n", rawOutput);

//     const project = extractJSON(rawOutput);

//     if (!project) {
//       return res.status(400).json({
//         success: false,
//         message: "AI returned invalid JSON",
//         rawOutput,
//       });
//     }

//     return res.json({
//       success: true,
//       project,
//     });
//   } catch (error) {
//     console.error("🔥 BOLT ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// });

import { extractJSON } from "./src/utils/extractJson.js";

app.post("/api/bolt", boltLimiter, async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ message: "Prompt required" });
    }

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0,
      messages: [
        { role: "system", content: boltSystemPrompt },
        { role: "user", content: prompt }
      ],
    });

    const rawOutput = response.choices[0].message.content;
    console.log("RAW AI OUTPUT:\n", rawOutput);

    const project = extractJSON(rawOutput);

    if (!project) {
      return res.status(400).json({
        success: false,
        message: "AI returned invalid JSON",
      });
    }

    res.json({
      success: true,
      project,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});
// ---------------- SERVER ----------------
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});


// import { extractJSON } from "./src/utils/extractJson.js";

// app.post("/api/bolt", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ message: "Prompt required" });
//     }

//     const response = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       temperature: 0,
//       messages: [
//         { role: "system", content: boltSystemPrompt },
//         { role: "user", content: prompt }
//       ],
//     });

//     const rawOutput = response.choices[0].message.content;
//     console.log("RAW AI OUTPUT:\n", rawOutput);

//     const project = extractJSON(rawOutput);

//     if (!project) {
//       return res.status(400).json({
//         success: false,
//         message: "AI returned invalid JSON",
//       });
//     }

//     res.json({
//       success: true,
//       project,
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });
