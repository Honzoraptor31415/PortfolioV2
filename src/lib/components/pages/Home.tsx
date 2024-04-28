"use client"

interface Props {
  data: any
}

function Home({ data }: Props) {
  console.log(data);

  return (
    <div>Home page</div>
  )
}

export default Home