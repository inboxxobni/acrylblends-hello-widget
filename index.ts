import type { Context } from '@deepseek-ai/cordis'

/** A widget on the app's home page. A test plugin for the collective app (spec 049 T024). */
export const name = 'acrylblends-hello-widget'
export const inject = ['home']

export function apply(ctx: Context) {
  ctx.effect(() =>
    ctx.home.widget({ id: 'acrylblends-hello-widget', title: 'Hello from the group', render: () => '<p>Five people, one app.</p>' }),
  )
}

export async function check(ctx: Context) {
  if (!ctx.home.widgets().some((widget) => widget.id === 'acrylblends-hello-widget')) throw new Error('the widget is not on the home page')
}
