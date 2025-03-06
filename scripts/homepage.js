<script>
        // navigation.js
        document.getElementById('menu').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.toggle('open');
        });
    </script>
    
    <script>
        // date.js
        document.getElementById("currentyear").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
    </script>
    
    <script>
        // course.js
        const courses = [
            { code: "WDD230", name: "Web Frontend Development I", credits: 3, completed: true },
            { code: "WDD231", name: "Web Frontend Development II", credits: 3, completed: false },
            { code: "CSE121B", name: "JavaScript Language", credits: 3, completed: true }
        ];
        
        function displayCourses(filter) {
            const courseContainer = document.getElementById("courses");
            courseContainer.innerHTML = "";
            let totalCredits = 0;
            
            courses.filter(course => filter === "all" || course.code.startsWith(filter.toUpperCase()))
                .forEach(course => {
                    totalCredits += course.credits;
                    let courseItem = document.createElement("div");
                    courseItem.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
                    courseItem.style.fontWeight = course.completed ? "bold" : "normal";
                    courseContainer.appendChild(courseItem);
                });
            
            document.getElementById("total-credits").textContent = totalCredits;
        }
        
        document.getElementById("all").addEventListener("click", () => displayCourses("all"));
        document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));
        document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
        
        displayCourses("all");
    </script>