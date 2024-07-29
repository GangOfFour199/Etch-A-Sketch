# Etch-A-Sketch

![]()



## ABOUT
This webpage comprises of an Etch-A-Sketch based drawing pad, complete with three different modes as well as customisable sizing of the grid. This project contains specified elements, including:

- A pixelated trail which follows the cursor when clicked down and dragged.
- A colorpicker wheel that updates the background colour of the gird items when cursor is cliekd and hovering over.
- Not only that, selecting colour from colorpicker updates the background of the 'colour' mdoe button.
- Select a region they are based in via the dropdown list.
- A 'rainbow' mode, which randomises each grid item's colour when mouse is clicked and dragged.
- Resizable grid options, operated with a slider and updated above instantaneously on the display.
- Various page structures in correpsondence with devices and their respective screen sizes.

## FEATURES

*Javascript*

- Utilises a JavaScript function which creates a grid after the desired input.
- JavaScript built-in function used to create grid element - .createElement().
- Utilises .innerHTML to reassign contents of element.
- .onclick() event listeners for buttons & oninput() for colorpicker.
- Function used to ensure each mode is either activated or deactivated - successful by adding/removing classes when 'rainbow'/'colour' mode is active.
- Features a size slider, which uses .onchange() event to call the function to update size of grid, plus .onmousemove() to change value of size display.
- Function which allows disticntion between mouse clicked and mouseover - both actions must occur at same time to update background of grid item.
- When grid restarts, it resets to default values (size, mode, colour).

*CSS*

- Randomised colour generator with Math.random() which creates rainbow effect event on 'rainbow' mode.
- Backgrounds consisting of radial and linear gradient styled colouring.
- Includes a footer that remains in position at the bottom of the page, irrespective of screen.
- For colorpicker styling, webkit has been used to remove dark grey padding that surrounds it. Due to security reasons and lack of full compatibility with OS, it is     advised against to use in general.
- Media queries for laptop/desktop, tablets and mobile screens accounted for.


## LINKS

[Try the assignment on The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

[Have a go with the sign-up form here!](https://gangoffour199.github.io/Etch-A-Sketch/)

This markdown file was created using [dilinger.io](https://dillinger.io/)
