import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Card className='max-w-full'>
        <CardContent>
          Welcome to NBti BBA Web Application!
          <Button variant={'default'}>
            Default Button
          </Button>
          <Button variant={'secondary'}>
            Secondary Button
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
