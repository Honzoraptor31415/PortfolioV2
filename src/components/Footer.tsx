"use client"

function Footer() {
  return (

    <footer>
      <p className="copyright-shit">&copy; Honzoraptor 2023 - {new Date().getFullYear()}</p>
      <p>Any bugs on this website? <a target="_blank" href="https://github.com/Honzoraptor31415/Portfolio">Fix them on Github.</a></p>
    </footer>
  )
}

export default Footer