import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const EditTree = (props) => {
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };

      const treeData = [
        {
          title: '0-0',
          key: '0-0',
          children: [
            {
              title: '0-0-0',
              key: '0-0-0',
              children: [
                { title: '0-0-0-0', key: '0-0-0-0' },
                { title: '0-0-0-1', key: '0-0-0-1' },
                { title: '0-0-0-2', key: '0-0-0-2' },
              ],
            },
            {
              title: '0-0-1',
              key: '0-0-1',
              children: [
                { title: '0-0-1-0', key: '0-0-1-0' },
                { title: '0-0-1-1', key: '0-0-1-1' },
                { title: '0-0-1-2', key: '0-0-1-2' },
              ],
            },
          ],
        },
      ];


      const testData = [
        {
          flex: 1,
          flexDirection: 'column',
          children: [
            {
              flex: 1,
              flexDirection: 'row',
              children: [
                {
                  flex: 2,
                },
                {
                  flex: 3,
                },
              ],
            },
            {
              flex: 1,
            },
          ],
        },
      ];
      
      const renderTree = (data) => {
          
      }

    return ( 
        <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      >
      </Tree>
     );
}
 
export default EditTree;

