export const createComponent = () => {
  const component = document.createElement('div')

  component.innerHTML = `
    <div class="space-4" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-8" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-16" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-24" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-32" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-40" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-48" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-56" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-64" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-72" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
    <div class="space-80" style="margin: 0 0 16px; background-color: var(--color-base-200);"></div>
  `

  return component
}
