const wellnessText = {
  0: "Soul Care is a multi-dimensional approach to wellness rooted in six dimensions of well-being. This assessment will give you an overview of your range of engagement in each  dimension so that you have a better understanding of your total well-being.",
  1: "The Soul Dimension is one’s ability to find purpose, nourish your soul, seek understanding, find meaning and seek fulfillment. It’s not limited to religious beliefs and practices, yet includes the values placed into action to create harmony, peace, and joy.",
  2: "The Connection Dimension deals with our relationships with others. It involves feeling connected in relationships, having a strong social network of support and guidance in times of need.",
  3: "The Mindset Dimension is associated with self-development, growth and lifelong learning. It includes engaging the subject or topic you know nothing about and being willing to first consider without judgment or agreement.",
  4: "The Feelings Dimension consists of being able to experience a broad range of emotions, thoughts, and reactions. It also includes identifying, managing and understanding our emotions as we experience them.",
  5: "The Movement Dimension is the area many often associate with overall wellness. This area includes the ways we take care of our bodies that produce endurance, flexibility and strength along with encouraging knowledge about food and nutrition.",
  6: "The Surroundings Dimension incorporates the interdependency of us as individuals and our environment. The core element is recognizing that the spaces that we live in affect our health and well-being and support a healthy, safe & comfortable environment."
};

const rating = {
  "6": "Thriving",
  "-6": "Stagnant",
  "5": "Thriving",
  "-5": "Struggling",
  "4": "Progression",
  "-4": "Struggling",
  "3": "Transition",
  "-3": "Transition"
};

const ratingDetails = {
  Thriving:
    "Thriving is a state of being, fully alive and connected to a meaning in life that is bigger than yourself. When you are thriving, you are expanding and getting stronger.",
  Progressing:
    "Progressing is a state of being when you are developing or moving gradually towards a more advanced state. When you are progressing, you are in a stage of growth.",
  Struggling:
    "Struggling is a state of being when you are experiencing resistance. When you are struggling you are most likely having difficulty reaching an outcome or goal.",
  Stagnant:
    "Stagnant is a state of being that lacks development and progressive movement. When you are stagnant you have little energy or no activity."
};

const wheel = {
  default: {
    key: "default",
    title: "The Soul Care Wheel",
    description: wellnessText[0],
    color: "#D9DCE5"
  },
  soul: {
    key: "soul",
    title: "Soul",
    description: wellnessText[1],
    questions: {
      1: "Do you pray, mediate, or practice whatever feeds you spiritually daily?",
      2: "Do you have any serene place of your own to go when you're stressed and overwhelmed?",
      3: "Do you make time for daily reflection and contemplation?",
      4: "Do you have a gratitude practice?",
      5: "Do you have a spiritual community that you belong to?",
      6: "Do you have a sense of meaning and purpose for your life?"
    },
    color: "rgb(229,227,220)"
  },
  connection: {
    key: "connection",
    title: "Connection",
    description: wellnessText[2],
    questions: {
      1: "Do you have a small group of people you can call on for support?",
      2: "Do you spend time with people who make you laugh?",
      3: "Do you nurture relationships with people who make you feel good about yourself?",
      4: "Are you able to set appropriate boundaries in your relationships?",
      5: "Are you able to seek out and accept help from others?",
      6: "Do you talk problems and concerns out with a trusted friend or relative?"
    },
    color: "rgb(245,224,206)"
  },
  mindset: {
    key: "mindset",
    title: "Mindset",
    description: wellnessText[3],
    questions: {
      1: "Do you regularly stimulate your brain by learning new things?",
      2: "Do you have an outlet for creativity? ",
      3: "Can you make a mistake without it being a catastrophe?",
      4: "Can you generally manage negative self-talk?",
      5: "Do you know and practice stress reduction techniques, such as deep breathing or meditation?",
      6: "Do you have challenges with focus and concentration?"
    },
    color: "rgb(186,113,78)"
  },
  feelings: {
    key: "feelings",
    title: "Feelings",
    description: wellnessText[4],
    questions: {
      1: "Can you identify and acknowledge all of your feelings?",
      2: "Do you affirm your right to experience all of your feelings?",
      3: "Do you know how to express all of your feelings appropriately?",
      4: "Are you aware of how you “numb out” from uncomfortable feelings?",
      5: "Do you have a plan in place for when you feel overwhelmed with feelings?",
      6: "Do you practice self-compassion and self-forgiveness?"
    },
    color: "rgb(78,96,48)"
  },
  movement: {
    key: "movement",
    title: "Movement",
    description: wellnessText[5],
    questions: {
      1: "Do you exercise enough to work up a sweat several times a week?",
      2: "Do you generally nourish your body with nutritious food?",
      3: "Can you eat food you love without feeling guilty?",
      4: "Do you feel comfortable in your own body?",
      5: "Do you sleep and rest when you’re tired?",
      6: "Have you found an exercise routine that aligns with your current needs? "
    },
    color: "rgb(104,97,89)"
  },
  surroundings: {
    key: "surroundings",
    title: "Surroundings",
    description: wellnessText[7],
    questions: {
      1: "Is your home clean and clutter free? ",
      2: "Is the noise level in your home tolerable?",
      3: "Does your workspace allow you to be as productive and creative as you’d like it to be? ",
      4: "Does your home have an sufficient amount of natural light? ",
      5: "Is your home a place where you can relax and unwind? ",
      6: "Do you have live houseplants in your home to help purify the air?"
    },
    color: "rgb(63,47,45)"
  }
};

const categories = Object.keys(wheel).filter((k) => k !== "default");

export { wheel, rating, categories, ratingDetails };
