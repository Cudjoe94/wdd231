document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { id: "CSE 110", category: "CSE", credits: 3, completed: false },
        { id: "WDD 130", category: "WDD", credits: 3, completed: true },
        { id: "CSE 111", category: "CSE", credits: 3, completed: false },
        { id: "CSE 210", category: "CSE", credits: 3, completed: false },
        { id: "WDD 131", category: "WDD", credits: 3, completed: true },
        { id: "WDD 231", category: "WDD", credits: 3, completed: false },
    ];

    const courseContainer = document.getElementById("courses");
    const totalCredits = document.getElementById("total-credits");
    const filterButtons = document.querySelectorAll(".filters button");

    function renderCourses(filter = "all") {
        courseContainer.innerHTML = "";
        const filteredCourses = courses.filter(course => 
            filter === "all" || course.category === filter
        );

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement("div");
            courseDiv.textContent = course.id;
            courseDiv.classList.add("course");
            if (course.completed) courseDiv.classList.add("completed");
            courseContainer.appendChild(courseDiv);
        });

        const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCredits.textContent = total;
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderCourses(button.dataset.filter);
        });
    });

    renderCourses();

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    document.getElementById("menu").addEventListener("click", () => {
        document.getElementById("nav-links").classList.toggle("show");
    });
});
