const interfaceConst = 'interface';

module.exports = (componentName) => `import styles from '${componentName}.module.css';
import {memo} from 'react';

${interfaceConst} Props {
    
}

export const ${componentName} = memo(function ${componentName}(props: Props) {
    const {} = props;
    
    return (
       <div className={styles.${componentName}}>
       
       </div>
  );
});`;