/* // The Array Model in Library is as follows
{
    {
  "title": "Introduction to JavaScript",
  "category": "Programming",
  "description": "This course provides an in-depth introduction to JavaScript, covering variables, loops, functions, and modern ES6 features.",
  "duration": "8 weeks",
  "instructor": {
    "name": "John Doe",
    "email": "john.doe@university.com",
    "phone": "555-123-4567"
  }
}
    }
  } */


        // Sample job list with unique IDs
        let courseArray = [
            {
                
                    "title": "Introduction to JavaScript",
                    "category": "Programming",
                    "description": "This course provides an in-depth introduction to JavaScript, covering variables, loops, functions, and modern ES6 features.",
                    "duration": "8 weeks",
                    "instructor": {
                      "name": "Madhubala Saravanan",
                      "email": "john.doe@university.com",
                      "phone": "555-123-4567"
                    }
                  }
                          
          ]
          
          // 1. Adding a new course
          function addCourse(course) {
            // Automatically assign a unique id by checking the last id in the list
            const newId = courseArray.length > 0 ? courseArray[courseArray.length - 1].id + 1 : 1;
            course.id = newId;
            courseArray.push(course);
            console.log("Course added successfully:", course);
          }
          
          
          
          // 3. Updating a course by id
          function updateCourse(title, updatedDetails) {
            const course = courseArray.find(course => course.id === id);
            if (course) {
              Object.assign(course, updatedDetails);
              console.log(`Course with id ${id} updated successfully.`);
            } else {
              console.log(`Course with id ${id} not found.`);
            }
          }
          
          // 4. Deleting a course by id (reuses removeJob)
          function deleteCourse(id) {
            const index = courseArray.findIndex(course => course.id === id);
            if (index !== -1) {
              // At position index remove 1 item
              courseArray.splice(index, 1);
              console.log(`course with id ${id} removed successfully.`);
            } else {
              console.log(`Course with id ${id} not found.`);
            }
          }
          
          // Example usage:
          
          // Adding a new course
          addCourse({
            "title": "Python Programming",
                    "category": "Programming",
                    "description": "This course provides an in-depth introduction to python, covering variables, loops, functions, and modern ES6 features.",
                    "duration": "10 weeks",
                    "instructor": {
                      "name": "Madhubala Saravanan",
                      "email": "john.doe@university.com",
                      "phone": "555-123-4567"
            },
          });
        
          function updateOneById(id, updatedData) {
            
              // Update properties only if they are provided in updatedData
              if (updatedData.title) course.title = updatedData.title;
              if (updatedData.duration) course.duration = updatedData.duration;
              
              return course; // Returns the updated car object
            }
            return false; // Returns false if the car with the provided ID is not found

            function deleteOneById(id) {
                const course = findById(id);
                if (courser) {
                  const initialLength = courseArray.length;
                  courserArray = courseArray.filter((course) => course.id !== Number(id)); // Filters out the car with the matching ID
                  return courseArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
                }
                return false; // Returns false if the car was not found
              }
          
        
          console.log("Updated course List:", courseArray);
          
          
          function logAllJobKeys(courseArray) {
            courseArray.forEach((course, index) => {
              console.log(`course ${index + 1}:`);
              Object.keys(course).forEach(key => {
                console.log(`${key}:, course[key]`);
              });
        
              console.log('-------------------'); 
              
                console.log("deleteOneById called:", deleteOneById(1));
              
        
            });
          }
          logAllJobKeys(courseArray);