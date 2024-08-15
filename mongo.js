const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  name: 'HTML is easy',
  number: '3923-32039',
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})