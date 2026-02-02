// export function extractJSON(text) {
//   if (!text) return null;

//   const firstBrace = text.indexOf("{");
//   const lastBrace = text.lastIndexOf("}");

// //   if (firstBrace === -1 || lastBrace === -1) {
// //     return null;
// //   }

// //   const jsonString = text.slice(firstBrace, lastBrace + 1);

// //   try {
// //     return JSON.parse(jsonString);
// //   } catch (err) {
// //     console.error("❌ JSON parse error:", err);
// //     return null;
// //   }
// // }

// export function extractJSON(text) {
//   if (!text) return null;

//   const firstBrace = text.indexOf("{");
//   const lastBrace = text.lastIndexOf("}");

//   if (firstBrace === -1 || lastBrace === -1) return null;

//   const jsonString = text.slice(firstBrace, lastBrace + 1);

//   try {
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error(" JSON parse failed:", err);
//     return null;
//   }
// // }
// export function extractJSON(text) {
//   if (!text) return null;

//   const firstBrace = text.indexOf("{");
//   const lastBrace = text.lastIndexOf("}");

//   if (firstBrace === -1 || lastBrace === -1) return null;

//   const jsonString = text.slice(firstBrace, lastBrace + 1);

//   try {
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error("❌ JSON parse failed");
//     return null;
//   }
// }
export function extractJSON(text) {
  if (!text) return null;

  // Remove markdown fences if AI adds them
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("❌ JSON parse failed");
    console.error(cleaned);
    return null;
  }
}
