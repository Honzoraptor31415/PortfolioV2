import ErrorPage from "@/components/pages/Error"

export const metadata = {
  title: "Sorry, this page doesn't exist"
}

function NotFound() {
  return <ErrorPage code={404} message="Sorry, the page you're looking for could not be found." />
}

export default NotFound