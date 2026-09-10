// Keep the whole card clickable without intercepting native link behavior
// (keyboard activation, modifier-clicks, or opening a property in a new tab).
export default function onPropertyCardClick(event) {
    if (event.target.closest('a, button, input, select, textarea')) return;
    const link = event.target.closest('.property-card')?.querySelector('a[href]');
    if (link) window.location.href = link.href;
}
