export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const surveyData = {
    questions: [
      {
        id: 1,
        text: "What type of product are you looking for?",
        options: [
          { text: "Software/Tech Tool" },
          { text: "Physical Product" },
          { text: "Service" },
          { text: "Digital Content" }
        ]
      },
      {
        id: 2,
        text: "What's your primary goal?",
        options: [
          { text: "Increase Productivity" },
          { text: "Save Money" },
          { text: "Improve Quality" },
          { text: "Learn Something New" }
        ]
      },
      {
        id: 3,
        text: "What's your budget range?",
        options: [
          { text: "Under $50" },
          { text: "$50 - $200" },
          { text: "$200 - $500" },
          { text: "$500+" }
        ]
      },
      {
        id: 4,
        text: "How soon do you need this?",
        options: [
          { text: "Immediately" },
          { text: "Within a week" },
          { text: "Within a month" },
          { text: "No rush" }
        ]
      }
    ]
  };

  res.status(200).json(surveyData);
}
