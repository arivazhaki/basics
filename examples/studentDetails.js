const markSheets =[
    {
      stdrollno: 1,
      stdName: "Ani",
      Tamil: 56,
      English: 76,
      Maths: 77,
      Science: 87,
      Social: 64
    },
    {
      stdrollno: 2,
      stdName: "Banu",
      Tamil: 78,
      English: 69,
      Maths: 84,
      Science: 52,
      Social: 88
    },
    {
      stdrollno: 3,
      stdName: "Ccarr",
      Tamil: 42,
      English: 35,
      Maths: 45,
      Science: 75,
      Social: 54
    },
    {
      stdrollno: 4,
      stdName: "Divya",
      Tamil: 44,
      English: 54,
      Maths: 55,
      Science: 64,
      Social: 74
    },
    {
      stdrollno: 5,
      stdName: "Elaveni",
      Tamil: 89,
      English: 75,
      Maths: 61,
      Science: 47,
      Social: 33
    },
    {
      stdrollno: 6,
      stdName: "Fathima",
      Tamil: 58,
      English: 54,
      Maths: 50,
      Science: 46,
      Social: 42
    },
    {
      stdrollno: 7,
      stdName: "Gaythri",
      Tamil: 96,
      English: 98,
      Maths: 99,
      Science: 91,
      Social: 95
    },
    {
      stdrollno: 8,
      stdName: "hency",
      Tamil: 56,
      English: 65,
      Maths: 74,
      Science: 83,
      Social: 92
    },
    {
      stdrollno: 9,
      stdName: "Ilangani",
      Tamil: 32,
      English: 23,
      Maths: 40,
      Science: 28,
      Social: 12
    },
    {
      stdrollno: 10,
      stdName: "John",
      Tamil: 85,
      English: 45,
      Maths: 12,
      Science: 42,
      Social: 15
    },
    {
      stdrollno: 11,
      stdName: "Kalyani",
      Tamil: 55,
      English: 65,
      Maths: 54,
      Science: 75,
      Social : 47
    },
    {
      stdrollno: 12,
      stdName: "Lakshmi",
      Tamil: 45,
      English: 54,
      Maths: 12,
      Science: 22,
      Social: 63
    },
    {
      stdrollno: 13,
      stdName: "Megala",
      Tamil: 30,
      English: 40,
      Maths: 24,
      Science: 23,
      Social: 14
    }
  ];
const getTotal=(student)=> 
       (student.Tamil+student.English+student.Maths
         +student.Science+student.Social);

const getResult=(marks)=>
        ((marks.Tamil>25&& marks.English>25&&
                           marks.Maths>25 &&
                           marks.Science>25&& 
                           marks.Social)? "Pass" :"Fail");
   
const getProcessMarksheets=(markSheets)=>
           markSheets.map((student)=>
        ({...student,
          totalMarks: getTotal(student),
           result:getResult(student)}));

const getRank=(studentData)=>{
  let rank=0;
  const sortedarray=studentData.sort((a,b)=>(b.totalMarks-a.totalMarks));
      const rankedData=sortedarray.map((student)=>
       ({...student,
             rank :student.result==="Pass" ? rank += 1 :"-"}))
        return rankedData;
  }

const main=()=>
 {
 const processMarksheets=getProcessMarksheets(markSheets);
 const studentRank=getRank(processMarksheets);
 console.log(studentRank);
 }
 main()
 