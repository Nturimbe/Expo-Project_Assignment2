// Each workout supplies image/title/duration/calories to the reusable card
// via props, plus extra detail fields used only on the Details screen.
export const workouts = [
  {
    id: 'w1',
    title: 'Full-Body Workout',
    category: 'Gym',
    duration: 4,
    calories: 320,
    difficulty: 'Easy',
    image: require('../../assets/workouts/full-body.jpg'),
    description:
      'A quick full-body burner that hits every major muscle group. Great for shifting stubborn fat and building lean muscle.',
    exercises: ['Bicep Curls', 'Push Ups', 'Squats', 'Plank'],
  },
  {
    id: 'w2',
    title: 'Indoor Run',
    category: 'Cardio',
    duration: 35,
    calories: 460,
    difficulty: 'Medium',
    image: require('../../assets/workouts/indoor-run.jpg'),
    description:
      'A steady-pace treadmill run designed to build cardiovascular endurance and torch calories.',
    exercises: ['Warm-up Walk', 'Steady Run', 'Cool-down Walk'],
  },
  {
    id: 'w3',
    title: 'Outdoor Cycle',
    category: 'Cardio',
    duration: 24,
    calories: 240,
    difficulty: 'Easy',
    image: require('../../assets/workouts/outdoor-cycle.jpg'),
    description:
      'A scenic outdoor ride at a moderate pace — easy on the joints, great for building stamina.',
    exercises: ['Warm-up Spin', 'Steady Ride', 'Cool-down Spin'],
  },
  {
    id: 'w4',
    title: 'Yoga Flow',
    category: 'Yoga',
    duration: 20,
    calories: 150,
    difficulty: 'Easy',
    image: require('../../assets/workouts/yoga-flow.jpg'),
    description:
      'A gentle flow sequence to improve flexibility, balance, and calm the mind.',
    exercises: ['Sun Salutations', "Warrior Pose", 'Downward Dog', 'Savasana'],
  },
  {
    id: 'w5',
    title: 'HIIT Blast',
    category: 'Gym',
    duration: 18,
    calories: 380,
    difficulty: 'Hard',
    image: require('../../assets/workouts/hiit-blast.jpg'),
    description:
      'High-intensity intervals to maximize calorie burn in minimal time. Not for the faint of heart.',
    exercises: ['Jump Squats', 'Burpees', 'Mountain Climbers', 'High Knees'],
  },
  {
    id: 'w6',
    title: 'Core Crusher',
    category: 'Gym',
    duration: 12,
    calories: 210,
    difficulty: 'Medium',
    image: require('../../assets/workouts/core-crusher.jpg'),
    description:
      'A focused ab and core session to build strength and stability through your midsection.',
    exercises: ['Crunches', 'Leg Raises', 'Russian Twists', 'Plank Hold'],
  },
];