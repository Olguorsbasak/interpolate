const interpolate = (value, session = {}, { leftDelimiter = "{", rightDelimiter = "}" } = {}) => {
    return value.replace(new RegExp(`${leftDelimiter}(.*?)${rightDelimiter}`, 'g'), (match, variableName) => {
      return session[variableName.trim()] ?? '';
    });
  };
  
  module.exports = interpolate;