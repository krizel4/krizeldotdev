export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { answers } = req.body;

  // Simple logic to determine product recommendation based on answers
  let productRecommendation = {
    title: "Product Recommendation",
    description: "Based on your answers, here's what we recommend:",
    image: "/api/placeholder/400/300",
    price: "$99",
    features: [
      "Feature 1",
      "Feature 2", 
      "Feature 3"
    ],
    bestFor: "Perfect for users like you"
  };

  // You can add more sophisticated logic here based on the answers
  if (answers && answers.length > 0) {
    const firstAnswer = answers[0]?.answer;
    if (firstAnswer === "Software/Tech Tool") {
      productRecommendation = {
        title: "Productivity Pro Suite",
        description: "A comprehensive software suite designed to boost your productivity and streamline your workflow.",
        image: "/api/placeholder/400/300",
        price: "$149",
        features: [
          "Task Management",
          "Time Tracking",
          "Team Collaboration",
          "Analytics Dashboard"
        ],
        bestFor: "Perfect for professionals and teams looking to increase productivity"
      };
    } else if (firstAnswer === "Physical Product") {
      productRecommendation = {
        title: "Smart Home Hub",
        description: "Connect and control all your smart devices from one central hub.",
        image: "/api/placeholder/400/300",
        price: "$199",
        features: [
          "Voice Control",
          "App Integration",
          "Energy Monitoring",
          "Security Features"
        ],
        bestFor: "Ideal for tech-savvy homeowners"
      };
    }
  }

  res.status(200).json(productRecommendation);
}
