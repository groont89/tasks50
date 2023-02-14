// Напишите функцию, которая переделывает строку из camelCase в snake_case.
// Например:
// solution("redevCourses") -> "redev_courses"

function toSnakeCase(str) {
  return str
    .split("")
    .map((item) => {
      if (item == item.toUpperCase()) {
        return "_" + item.toLowerCase();
      } else {
        return item;
      }
    })
    .join("");
}
console.log(toSnakeCase("redevCase"));
