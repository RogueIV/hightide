const REVIEWS = [
  {
    author_name: "Kristine Hunt",
    rating: 5,
    relative_time_description: "a year ago",
    text: "I am very pleased with the level of service we received. They returned my phone call quickly and showed up on time! Our windows and sliding glass doors look amazing, I have recommended High Tide to all of my friends, family and neighbors!"
  },
  {
    author_name: "b",
    rating: 5,
    relative_time_description: "a year ago",
    text: "Highly recommend HighTide Washing Service.  They did a good job of cleaning all the windows and solar panels on my house.   Arrived on time and got the job done."
  },
  {
    author_name: "Jennifer ONeill",
    rating: 5,
    relative_time_description: "a year ago",
    text: "I hired High Tide to pressure wash my entire house exterior, the surrounding concrete, and also to clean our windows. They had fair and competitive pricing, but most of all they were extremely professional, responsive  with communication, they showed up on time and they did a great job. Everything you can ask for in a  reliable contractor. My windows and screens look amazing and the concrete that I don’t think had been cleaned in 20 years came out like new. I highly recommend this company."
  },
  {
    author_name: "Edward & Ruth Thomas",
    rating: 5,
    relative_time_description: "a year ago",
    text: "It's our pleasure to recommend HighTide Washing Services.  Our solar panels, gutters, windows, screens, patio and driveway were cleaned in one appointment.  A lot of hard labor for one day, but they were diligent and thorough.  We were so pleased with the results"
  },
  {
    author_name: "Angela Andersen",
    rating: 5,
    relative_time_description: "a year ago",
    text: "I would highly recommend HighTide Washing for any of your power washing needs. They arrived on time, very detailed and thorough with their work. My windows and screens look amazing as well as my concrete outside of my house."
  },
  {
    author_name: "Linda Thomason",
    rating: 5,
    relative_time_description: "a year ago",
    text: "Had my solar panels cleaned as well as gutters and drain spouts and walkway/driveway power washed. Great job, reasonable prices, good communication with owners. Would highly recommend using them."
  },
  {
    author_name: "LK S",
    rating: 5,
    relative_time_description: "9 months ago",
    text: "Great experience with HighTide and Ken Anderson.  Polite and capable, Ken really worked hard at our large hardscape with its  couple of problem areas, and did a good job.  Very satisfied."
  },
  {
    author_name: "Shana Lennon",
    rating: 5,
    relative_time_description: "a year ago",
    text: "I would highly recommend them for window washing! They did an excellent job and they were very thorough. They were on time and very professional. It has made a huge difference and our windows look great!"
  },
  {
    author_name: "Ciara Clement",
    rating: 5,
    relative_time_description: "a year ago",
    text: "Very happy with HighTide! They arrived promptly and worked efficiently to remove all the spider webs on my house (there were A LOT), clean my gutters, and get rid of the leaf buildup on my roof! And they were very friendly which is always a plus!"
  },
  {
    author_name: "DeAnna T",
    rating: 5,
    relative_time_description: "a year ago",
    text: "High Tide did a great job on our windows and screens. They were efficient and completed their job quickly. Highly recommend!"
  }
];

findRandomReview = function() {
  if (!REVIEWS || REVIEWS.length === 0) return; 
  const randomIndex = Math.floor(Math.random() * REVIEWS.length);
  return REVIEWS[randomIndex];
};

showReview = function(containerId) {
    // Build cards
    const reviewContainer = document.getElementById(containerId);
    reviewContainer.innerHTML = "";

    const review = findRandomReview();
    if (!review) {
      return;
    }

    const card = document.createElement('article'); 
    card.className = 'card';

    const body = document.createElement('div');
    const head = document.createElement('div');
    head.className = 'head';

    const name = document.createElement('a'); 
    name.className = 'name';
    name.textContent = review.author_name || "Google user";

    const stars = document.createElement('span');
    stars.className = 'stars'; 
    stars.style.setProperty('--v', review.rating || 0);
    stars.setAttribute('aria-label', `Rating ${review.rating} out of 5 stars`);
    
    const time = document.createElement('span');
    time.className = 'time';
    time.textContent = review.relative_time_description || "";

    head.append(name, stars, time);

    const reviewText = document.createElement('div'); 
    reviewText.className='review-text';
    reviewText.textContent = review.text || '';

    body.append(head, reviewText);
    card.append(body);
    reviewContainer.appendChild(card);
};

showReview('review-container');