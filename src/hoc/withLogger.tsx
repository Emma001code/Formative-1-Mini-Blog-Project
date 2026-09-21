import { useEffect, type ComponentType } from 'react'

// HOC: take a component in, return the same UI with mount/unmount logs.
export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string,
) {
  function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`)
      return () => {
        console.log(`${componentName} unmounted`)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  LoggedComponent.displayName = `withLogger(${componentName})`
  return LoggedComponent
}
