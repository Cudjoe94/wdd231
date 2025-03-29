// Courses info
const courses = [
    {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
        'Python'
      ],
      completed: true
    },
    {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
        'HTML',
        'CSS'
      ],
      completed: true
    },
    {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
        'Python'
      ],
      completed: true
    },
    {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
        'C#'
      ],
      completed: true
    },
    {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
        'HTML',
        'CSS',
        'JavaScript'
      ],
      completed: true
    },
    {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
        'HTML',
        'CSS',
        'JavaScript'
      ],
      completed: false
    }
  ]
   
  function getCourses() {
    // function to clear the course list initial value
    function clearList() {
      const courseList = document.getElementById("course-list");
      courseList.innerHTML = "";
    }
   
    // Function to clear credit initial value
    function clearCredit() {
      const creditList = document.getElementById("course-credit");
      creditList.innerHTML = "";
    }
   
    const allCoursesBtn = document.getElementById("all-courses");
   
    // When All btn is clicked, do something
    allCoursesBtn.addEventListener('click', () => {
      // First clear whatever we have in the courses ul element
      clearList();
   
      // Call the getAllCourses and getTotalFunction function
      getAllCourses(courses);
      getTotalCredit()
    })
   
    const wddCoursesBtn = document.getElementById("wdd-courses");
   
    // When WDD btn is clicked, do something
    wddCoursesBtn.addEventListener("click", () => {
      // First clear whatever we have in the courses ul element
      clearList();
   
      // Call the getWddCourses and wddCredComplete function
      getWddCourses(courses);
      wddCredCompleted(courses);
    })
   
    const cseCoursesBtn = document.getElementById("cse-courses");
   
    // When CSE btn is clicked, do something
    cseCoursesBtn.addEventListener("click", () => {
      // First clear whatever we have in the courses ul element
      clearList();
   
      // Call the getCseCourses and cseCredCompleted function
      getCseCourses(courses);
      cseCredCompleted(courses)
    })
   
    function getAllCourses(course) {
      course.forEach(element => {
        if (element.completed) {
          const courseItem = document.createElement("li");
          courseItem.innerHTML = `
          <p>✔ ${element.subject} ${element.number}</p>`;
          courseItem.classList.add("completed");
          document.getElementById("course-list").appendChild(courseItem);
        } else {
          const courseItem = document.createElement("li");
          courseItem.innerHTML = `
          <p>${element.subject} ${element.number}</p>
        `;
          courseItem.classList.add("not-completed");
          document.getElementById("course-list").appendChild(courseItem);
        }
      })
    }
    getAllCourses(courses);
   
    function getWddCourses(course) {
      const wddCourses = course.filter(element => element.subject === "WDD");
      wddCourses.forEach(element => {
        if (element.completed) {
          const courseItem = document.createElement("li");
          courseItem.innerHTML = `
          <p>✔ ${element.subject} ${element.number}</p>`;
          courseItem.classList.add("completed");
          document.getElementById("course-list").appendChild(courseItem);
        } else {
          const courseItem = document.createElement("li");
          courseItem.innerHTML = `
          <p>${element.subject} ${element.number}</p>
        `;
          courseItem.classList.add("not-completed");
          document.getElementById("course-list").appendChild(courseItem);
        }
      });
    }
   
    function getCseCourses(course) {
      const wddCourses = course.filter(element => element.subject === "CSE");
      wddCourses.forEach(element => {
        if (element.completed) {
          const courseItem = document.createElement("li");
          courseItem.innerHTML = `
          <p>✔ ${element.subject} ${element.number}</p>
        `;
          courseItem.classList.add("completed");
          document.getElementById("course-list").appendChild(courseItem);
        } else {
          const courseItem = document.createElement("li");
          courseItem.innerHTML = `
          <p>${element.subject} ${element.number}</p>
        `;
          courseItem.classList.add("not-completed");
          document.getElementById("course-list").appendChild(courseItem);
        }
      });
    }
   
    function totalCredits(credit) {
      return credit.reduce((total, course) => total + course.credits, 0);
    }
   
    function getTotalCredit() {
      // Clear the initial credit value in the UI
      clearCredit();
   
      const total = totalCredits(courses);
      const list = document.createElement("li");
      list.innerHTML = `Total credits: ${total}`;
      document.getElementById("course-credit").appendChild(list)
    }
    getTotalCredit();
   
    function wddCredCompleted(credit) {
      // Clear the initial credit value in the UI
      clearCredit();
   
      const wdd = credit.filter(element => element.subject == "WDD");
      const wddCourses = totalCredits(wdd);
      const list = document.createElement("li");
      list.innerHTML = `WDD credits: ${wddCourses}`;
      document.getElementById("course-credit").appendChild(list);
    }
   
    function cseCredCompleted(credit) {
      // Clear the initial credit value in the UI
      clearCredit();
   
      const cse = credit.filter(element => element.subject == "CSE");
      const cseCourses = totalCredits(cse);
      const list = document.createElement("li");
      list.innerHTML = `CSE credits: ${cseCourses}`;
      document.getElementById("course-credit").appendChild(list)
    }
  }
  getCourses()
   