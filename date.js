module.exports = function ()
{
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = new Date();

    return day.toLocaleDateString("en-US",options);
}