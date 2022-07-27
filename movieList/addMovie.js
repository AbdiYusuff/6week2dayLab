const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

}

const crossOfMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Blood Sport')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//span'))
    await movie.click()

}

module.exports = {
    addMovie,
    crossOfMovie
}
