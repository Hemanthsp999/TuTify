import { Link } from "react-router-dom"

function SignUp() {

    return (
        <>
            <div className=" bg-[url('./ra.jpg')] bg-cover">
                <div className=" grid grid-cols-2 gap-4">
                    <div className=" my-40 mx-64 text-5xl font-bold text-white hover:text-blue-500">
                        <Link to="/student">As Student</Link>
                    </div>
                    <div className=" my-40 mx-64 text-5xl text-white font-bold hover:text-blue-500">
                        <Link to="/teacher" >As Teacher</Link>
                    </div>
                </div>
                <p className=" mx-72 text-3xl italic font-bold text-white">Online tutoring facilitates personalized learning in academic subjects like math, science, and language arts.It aids in standardized test preparation, offering guidance for exams such as SAT, ACT, GRE, and GMAT.Language learning is enhanced through platforms connecting learners with native speakers worldwide.Coding bootcamps and tutoring platforms provide instruction in programming languages like Python and Java.Music, art, and creative skills are honed through online lessons in guitar, piano, drawing, and more.Tutors assist with career development, including resume writing, interview preparation, and coaching.Specialized subjects like philosophy, psychology, and economics receive focused online support.Real-time homework help is available, aiding students in understanding and completing assignments.Adult education is supported, allowing individuals to enhance skills or pursue further education.Special education tutors offer individualized support for students with learning disabilities or special needs.Study skills and time management are honed through personalized online tutoring sessions.STEM programs benefit from online tutoring, fostering interest and proficiency in science, technology, engineering, and mathematics.Tutors serve as virtual classroom assistants, reinforcing concepts and providing additional support.The global reach of online tutoring allows students to connect with tutors worldwide, gaining diverse perspectives.Online tutoring offers flexibility for learners of all ages, accommodating diverse educational needs.It provides a versatile solution, bridging geographical gaps and making education accessible to a global audience.</p>
            </div>
        </>
    )
}
export default SignUp