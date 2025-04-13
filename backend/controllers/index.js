
const { default: Activity } = require('../models/Activity');




const getUserActivity = async (req, res) => {
  // const { id } = req.headers; // Correctly access the headers

  // try {
  //   if (!id) {
  //     return res.status(400).json({ message: 'User ID is required in the headers.' });
  //   }

  //   // Fetch reports specific to the user
  //   const reports = await Activity.find({ userId: id }); // Assuming your reports have a `userId` field

    res.status(200).json("ok");
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: 'Server Error' });
  // }
};



const createActivity=async(req,res)=>{
  try {
    const data={
      userId: "supabase-user-id", // placeholder
      title: "Football Match",
      description: "Join us at the main field!",
      category: "Sports",
      location: { lat: 9.0345, lng: 38.7638 },
      time: new Date(), // or selected datetime
      duration: 90, // in minutes
    }
    const {userId, description, location,title,category,time,duration} =data;
    const expiresAt = new Date(new Date(time).getTime() + duration * 60000);
    console.log(req.body);
    
    const newActivity = new Activity({userId, description, location,title,category,time,duration,expiresAt });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
} catch (error) {
    res.status(500).json({ message: 'Server Error' });
}
}

module.exports={createActivity,getUserActivity}