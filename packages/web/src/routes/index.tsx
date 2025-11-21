import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <p>
        hello yo first we will ship this
      </p>
    </div>
  )
}
