const persons = `
	{
        "list": [
         {
          "name": "Petr",
          "age": "20",
          "prof": "mechanic"
         },
         {
          "name": "Vova",
          "age": "60",
          "prof": "pilot"
         }
    ]
}
`

const data = JSON.parse(persons)
console.log(data)
