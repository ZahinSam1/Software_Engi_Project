

// export const UserData = [
//     {
//         id: 1,
//         year: 2016,
//         userGain: 8000,
//         userLost: 826,
//     },
//     {
//         id: 1,
//         year: 2017,
//         userGain: 4000,
//         userLost: 825,
//     },
//     {
//         id: 1,
//         year: 2018,
//         userGain: 6000,
//         userLost: 895,
//     },
//     {
//         id: 1,
//         year: 2019,
//         userGain: 7000,
//         userLost: 829,
//     },
//     {
//         id: 1,
//         year: 2020,
//         userGain: 8000,
//         userLost: 826,
//     },
// ]


export const UserData = [
    {
      id: 1,
      year: 2016,
      months: [
        { month: "January", userCount: 800 },
        { month: "February", userCount: 700 },
        { month: "March", userCount: 800 },
        { month: "April", userCount: 800 },
        { month: "May", userCount: 800 },
        { month: "June", userCount: 800 },
        { month: "July", userCount: 800 },
        { month: "August", userCount: 800 },
        { month: "September", userCount: 800 },
        { month: "October", userCount: 800 },
        { month: "November", userCount: 800 },
        { month: "December", userCount: 800 },

        // ... add more months and user counts
      ],
    },
    {
      id: 2,
      year: 2017,
      months: [
        { month: "January", userCount: 600 },
        { month: "February", userCount: 500 },
        // ... add more months and user counts
      ],
    },
    // ... add more years and their respective monthly data
  ];
  


    // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "#077094",
  //         "#0093A9",
  //         "#33B7B5",
  //         "#70D9B8",
  //         "#eb7f6cbc",
  //         "#077094",
  //         "#0093A9",
  //         "#33B7B5",
  //         "#70D9B8",
  //         "#eb7f6cbc",
  //       ],
  //       borderColor: "#ABA9BB",
  //       borderWidth: 1,
  //     },
  //   ],
  // });