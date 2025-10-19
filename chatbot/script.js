let knowledgeBase = {};

    // Load data from JSON
    fetch("kipm-data.json")
      .then(res => res.json())
      .then(data => knowledgeBase = data);

    const chat = document.getElementById("chat");

    function append(text, sender) {
      const div = document.createElement("div");
      div.className = "msg " + sender;
      div.innerHTML = text;
      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;
    }

    function send() {
      const inp = document.getElementById("user-input");
      const text = inp.value.trim();
      if (!text) return;
      append(text, "user");
      inp.value = "";
      setTimeout(() => append(getResponse(text.toLowerCase()), "bot"), 500);
    }

    function getResponse(q) {
      if (q.includes("course")) return knowledgeBase.courses;
      if (q.includes("eligibility")) return knowledgeBase.eligibility;
      if (q.includes("admission")) return knowledgeBase.admission;
      if (q.includes("document")) return knowledgeBase.documents;
      if (q.includes("fee")) return knowledgeBase.fees;
      if (q.includes("scholarship")) return knowledgeBase.scholarship;
      if (q.includes("date") || q.includes("last")) return knowledgeBase.dates;
      if (q.includes("hostel")) return knowledgeBase.hostel;
      if (q.includes("facility")) return knowledgeBase.facilities;
      if (q.includes("placement")) return knowledgeBase.placements;
      if (q.includes("location") || q.includes("address")) return knowledgeBase.location;
      if (q.includes("contact") || q.includes("phone") || q.includes("email")) return knowledgeBase.contact;
      if (q.includes("hello") || q.includes("hi")) return "Hello 👋 Ask me about courses, admission, fees, hostel, facilities, placements, or contact details.";
      return "❓ Sorry, I don’t have info on that. Try asking about courses, admission, fees, scholarships, hostel, placements, or contact.";
    }

    // Welcome message
    append("👋 Hello! i am KIPM's admission bot.How can i help you today?","bot");