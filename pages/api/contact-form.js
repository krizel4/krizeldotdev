export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM
  // 4. Log the submission

  console.log('Contact form submission:', {
    name,
    email,
    company,
    phone,
    message,
    timestamp: new Date().toISOString()
  });

  // For now, just return success
  res.status(200).json({ 
    message: 'Form submitted successfully',
    id: Date.now() // Mock ID
  });
}
