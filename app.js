const fs = require('fs');
const express = require('express');
const app = express();
const morgan=require('morgan');
app.use(express.json());



//All  Functions
app.use(morgan('dev'));


const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//get all tours
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: { 
      tours,
    },
  });
};

//get a specific tour with the help of id
const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',

    data: {
      tour,
    },
  });
};

//patch request to edit
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<h1>updated tour</h1>',
    },
  });
};

//Delete the tour
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};

//Create new tour

const createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign(
    {
      id: newId,
    },
    req.body
  );
  console.log(newTour);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201),
        JSON({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
    }
  );

  res.send('done');
};



const getAllUsers=(req,res)=>{
  res.status(500).json({
    status:'error',
    message:'This route is not yet defind'
  })
}
const getUser=(req,res)=>{
  res.status(500).json({
    status:'error',
    message:'This route is not yet defind'
  })
}
const createUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};




//All Routes
const tourRouter = express.Router();
const userRouter = express.Router();



//1.Tours
tourRouter.route('/').get(getAllTours).post(createTour);

tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)


//2.Users

userRouter.route('/').get(getAllUsers).post(createUsers)
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);



const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
