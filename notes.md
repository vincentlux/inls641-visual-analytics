# 0828
## Ebbinghaus illusion
## What is visualization?
    Is the communication of information using graphical representations
## Why visualization?
* See patterns
* Identify trends
* Detect outliers and anomalies
* BUT susceptible to error
    * illusions
## Power of graphics
* Anscombe's Quartet example
## modern visualization
* Large dataset
* Reuse
    * Templates quickly applied
    *

## From data to Graphic
 * viz pipeline
 Raw Data -> data analysis -> prepared data -> filtering -> focus data -> mapping -> geometric data -> rendering -> image data
* rendering is largely solved\
    -SVG, java, etc.

* Four steps to construct a visualization\
    -Data analysis\
    -Filtering\
    -Mapping\
    -Filtering

# 0905
## SVG and the DOM
* SVG adds new element types to the DOM
    * Still elements with attributes
    * CSS can be used to style 

## D3 and the DOM
* D3 is largely a DOM manipulation language
    * Add nodes
    * Remove nodes
    * Update nodes
* D3
    * **D**ata **D**riven **D**ocument

## Data and graphics
* Raw data
    * Is raw data enough?
* Data types
    * categorical
    * ordinal
        * has a defined order
        * some is cyclical
    * Interval data
    * ratio data
        * real numbers on a number line that includes a defined zero.
* Data structures
    * Entities and Attributes
        * data is typically organized as entities
        * entities have attributes
        * entities have relationships
            * eg. temporal; spatial
            * relationships can have attributes and can be directed or not
    * Data strucute representations
        * tables are the most common
        * Network
            * nodes
            * edges
            * project: look back to see where the delay come from?
        * Trees
        * Fields
            * functions with a continuous domain
* Sementics
    * What does the data represent?
    * eg. first group by areas and analyze

## Practicalities: Tables and D3
* In JS, we can use **Array of objects** to represent a table

## Theory and Practice
* Theory

* Practice
    * always remember what user tasks this system can do

## Encoding (Gestalt principles)
* color
    * avoid "rainbow" color map
        * people have different understandings of high and low values
    * be aware of color blindness
* orientation
* Motion
    * A **change** to any of the other seven properties
    * Animation is typically used to iterpolate between values
    * typically associated with either
    * **use judiciously** since it always draw people's attention

