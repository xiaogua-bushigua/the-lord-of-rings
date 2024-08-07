import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { NodeToyMaterial, NodeToyTick } from '@nodetoy/react-nodetoy';
import { data } from '@/shaders/Ball/shaderData.js';

const Tower = () => {
	const { nodes, materials } = useGLTF('./wizard_tower.glb');

	const config = {
		backside: false,
		samples: 16,
		resolution: 256,
		transmission: 0.5,
		roughness: 0.12,
		clearcoat: 1,
		clearcoatRoughness: 0.3,
		thickness: 70,
		backsideThickness: 200,
		ior: 5,
		chromaticAberration: 1,
		anisotropy: 1,
		distortion: 0,
		distortionScale: 0.2,
		temporalDistortion: 0,
		attenuationDistance: 4.1,
		attenuationColor: '#ff0000',
		color: '#dc2500',
	};

	return (
		<group dispose={null} scale={0.005}>
			<group position={[-1.039, 80.443, 70.774]} rotation={[-Math.PI / 2, 0.089, -1.495]}>
				<mesh castShadow receiveShadow geometry={nodes['Object001_Material_#182_0'].geometry}>
					<meshPhysicalMaterial color={'#363636'} roughness={1} metalness={0.2} />
				</mesh>
				<mesh castShadow receiveShadow geometry={nodes['Object001_Material_#182_0_1'].geometry}>
					<meshPhysicalMaterial color={'#363636'} roughness={1} metalness={0.2} />
				</mesh>
			</group>
			<group position={[3.934, 102.639, 62.756]} rotation={[-2.673, 1.46, 1.279]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Cylinder013_Material_#185_0'].geometry}
					material={materials.Material_185}
				/>
				{/* 修权杖：发光球 */}
				<mesh position={[-0.05, 0.15, -0.4]} castShadow receiveShadow>
					<sphereGeometry />
					<NodeToyMaterial data={data} />
				</mesh>
				<NodeToyTick />
			</group>
			<group position={[0.633, 270.376, 28.607]} rotation={[-3.134, 0, 0.009]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Plane002_Material_#59_0'].geometry}
					material={materials.Material_59}
				/>
				{/* 修V灯 */}
				<mesh castShadow receiveShadow geometry={nodes['Plane002_Material_#62_0'].geometry}>
					<meshBasicMaterial color="#ff6262" />
				</mesh>
			</group>
			<group position={[-0.001, 279.124, -9.658]} rotation={[-Math.PI / 2, 0, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Cylinder002_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Cylinder002_Material_#166_0'].geometry}
					material={materials.Material_166}
				/>
			</group>
			<group position={[-0.031, 313.725, 21.767]} rotation={[-3.075, 0, 0]}>
				{/* 修玻璃灯 */}
				<mesh castShadow receiveShadow geometry={nodes['Sphere037_Material_#61_0'].geometry}>
					<meshBasicMaterial color="#4ff7e3" />
				</mesh>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Sphere037_Material_#210_0'].geometry}
					material={materials.Material_210}
				/>
			</group>
			<group position={[-0.001, 189.945, -9.658]} rotation={[-Math.PI / 2, 0, 0.009]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Cylinder001_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Cylinder001_Material_#74_0'].geometry}
					material={materials.Material_74}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Cylinder001_Material_#141_0'].geometry}
					material={materials.Material_141}
				/>
			</group>
			<group position={[-0.825, 148.449, -9.683]} rotation={[-Math.PI / 2, 0, -1.038]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object001_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object001_Material_#74_0'].geometry}
					material={materials.Material_74}
				/>
			</group>
			<group position={[-1.878, 148.509, -8.131]} rotation={[-Math.PI / 2, 0, -2.086]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object002_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object002_Material_#74_0'].geometry}
					material={materials.Material_74}
				/>
			</group>
			<group position={[-0.192, 147.627, -8.235]} rotation={[-Math.PI / 2, 0, -3.133]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object003_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object003_Material_#74_0'].geometry}
					material={materials.Material_74}
				/>
			</group>
			<group position={[1.993, 146.627, -8.423]} rotation={[-1.586, 0, 2.077]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object004_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object004_Material_#74_0'].geometry}
					material={materials.Material_74}
				/>
			</group>
			<group position={[1.993, 146.627, -8.423]} rotation={[-1.585, 0.013, 1.057]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object005_Material_#60_0'].geometry}
					material={materials.Material_60}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Object005_Material_#74_0'].geometry}
					material={materials.Material_74}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Plane003_Material_#178_0'].geometry}
				material={materials.Material_178}
				position={[-4.86, -7.961, 9.714]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Object006_Material_#141_0'].geometry}
				material={materials.Material_141}
				position={[-1.264, 51.134, 107.622]}
				rotation={[-Math.PI / 2, 0, 0.009]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Object007_Material_#141_0'].geometry}
				material={materials.Material_141}
				position={[-0.288, 34.192, 149.16]}
				rotation={[-Math.PI / 2, 0, 0.009]}
			/>
			{/* 修熔岩 */}
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder011_Material_#179_0'].geometry}
				position={[-18.906, -60.508, 12.322]}
				rotation={[-Math.PI / 2, 0, 0.047]}
			>
				<MeshTransmissionMaterial {...config} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere038_Material_#178_0'].geometry}
				material={materials.Material_178}
				position={[-6.761, -86.778, 57.67]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Object008_Material_#141_0'].geometry}
				material={materials.Material_141}
				position={[0.097, 170.404, 0]}
				rotation={[-Math.PI / 2, 0, 0.009]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box001_Material_#183_0'].geometry}
				material={materials.Material_183}
				position={[-0.174, 80.368, 71.676]}
				rotation={[-Math.PI / 2, 0.089, -1.495]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder012_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[2.869, 83.423, 60.981]}
				rotation={[-1.651, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid021_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-1.258, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid022_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-0.865, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid023_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-0.08, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid024_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[0.706, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid025_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[2.276, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid026_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[3.062, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid027_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-2.436, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid028_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-0.473, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid029_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[0.313, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid030_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[1.098, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid031_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[1.884, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid032_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[2.669, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid033_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-2.829, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid034_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-2.043, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid035_Material_#185_0'].geometry}
				material={materials.Material_185}
				position={[3.542, 102.688, 62.712]}
				rotation={[-1.651, -0.05, 0.174]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder014_Material_#223_0'].geometry}
				material={materials.Material_223}
				position={[-0.88, 386.761, -9.195]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box060_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box061_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, -1.134]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box062_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, -1.92]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box063_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, -2.705]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box064_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, 2.793]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box065_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, 2.007]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box066_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, 1.222]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box067_Material_#224_0'].geometry}
				material={materials.Material_224}
				position={[-0.524, 377.379, -9.6]}
				rotation={[-Math.PI / 2, 0, 0.436]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box037_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[20.9, -12.09, 319.697]}
				rotation={[-1.656, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box038_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[20.405, 17.406, 307.702]}
				rotation={[Math.PI, 0.424, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box039_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[19.659, 7.532, 290.386]}
				rotation={[-1.766, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box040_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[20.231, 27.127, 280.037]}
				rotation={[Math.PI, 0.286, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box041_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[19.659, 18.202, 262.386]}
				rotation={[-1.746, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box042_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[19.659, 21.975, 172.374]}
				rotation={[1.555, 0, -Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box043_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[20.231, 35.176, 187.498]}
				rotation={[0, -0.016, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box044_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[19.659, 24.096, 204.549]}
				rotation={[1.573, 0, -Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box045_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[20.231, 36.419, 218.059]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box046_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[19.659, 23.347, 232.298]}
				rotation={[1.699, -0.031, 3.14]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box047_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[20.231, 35.538, 249.143]}
				rotation={[Math.PI, 0.175, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box048_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.216, 21.974, 172.304]}
				rotation={[-1.586, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box049_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.962, 35.188, 187.429]}
				rotation={[-Math.PI, 0.016, Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box050_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.216, 24.096, 204.479]}
				rotation={[-1.569, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box051_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.787, 36.002, 217.946]}
				rotation={[Math.PI, 0, Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box052_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.216, 23.355, 232.229]}
				rotation={[-1.443, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box053_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-20.621, -13.409, 321.362]}
				rotation={[1.485, 0.052, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box054_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.787, 17.422, 307.63]}
				rotation={[0, -0.424, Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box055_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.216, 7.545, 290.318]}
				rotation={[1.376, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box056_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.787, 27.547, 280.051]}
				rotation={[0, -0.286, Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box057_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.216, 18.214, 262.317]}
				rotation={[1.396, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box058_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-21.787, 35.4, 249.95]}
				rotation={[Math.PI, -0.175, Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box059_Material_#181_0'].geometry}
				material={materials.Material_181}
				position={[-0.745, 6.992, 249.593]}
				rotation={[-1.824, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder003_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 345.86, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder004_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 349.598, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder005_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 351.751, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder006_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 355.457, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder007_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 360.344, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid003_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid004_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid005_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid006_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid007_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid008_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid009_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -0.385]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid010_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -0.659]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid011_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -1.421]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid012_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -1.69]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid013_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -2.493]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid014_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, -2.758]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid015_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, 2.769]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid016_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, 2.508]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid017_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, 1.72]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid018_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 364.11, -9.658]}
				rotation={[-Math.PI / 2, 0, 1.453]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid019_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-1.168, 363.724, -8.994]}
				rotation={[-Math.PI / 2, 0, 0.655]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pyramid020_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-1.168, 363.724, -8.994]}
				rotation={[-Math.PI / 2, 0, 0.387]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder008_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 281.308, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder009_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 285.304, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder010_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 288.43, -9.658]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Torus001_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.059, 313.736, 21.058]}
				rotation={[-3.075, 0, -0.017]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Torus002_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.059, 313.736, 21.434]}
				rotation={[-3.075, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box001_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.134, 313.618, 21.599]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box002_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.134, 313.618, 21.599]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box003_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-8.787, 304.454, 22.469]}
				rotation={[1.476, 0.022, 3.081]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box004_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[8.625, 304.565, 22.419]}
				rotation={[-0.048, -1.474, 1.59]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box005_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.184, 326.499, 21.251]}
				rotation={[-Math.PI / 2, Math.PI / 4, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box006_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.004, 296.528, 23.029]}
				rotation={[-1.628, 0.785, 0.04]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box009_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-38.259, 285.346, -16.862]}
				rotation={[-1.608, 0.785, 2.221]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box010_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-12.518, 285.346, 26.814]}
				rotation={[-1.73, 0.736, -0.246]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box011_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[25.088, 285.346, -39.24]}
				rotation={[-1.608, 0.785, -1.97]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box012_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-24.897, 285.346, -38.653]}
				rotation={[-1.73, 0.736, 1.848]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box024_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.134, 313.618, 21.599]}
				rotation={[-Math.PI / 2, -0.797, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box025_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.134, 313.618, 22.243]}
				rotation={[Math.PI / 2, 0.797, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere001_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-13.858, 358.102, 25.126]}
				rotation={[2.957, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere002_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-8.39, 358.102, 25.126]}
				rotation={[2.957, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere003_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-2.923, 358.102, 25.126]}
				rotation={[2.957, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere004_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[2.545, 358.102, 25.126]}
				rotation={[2.957, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere005_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[8.013, 358.102, 25.126]}
				rotation={[2.957, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere006_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[13.48, 358.102, 25.126]}
				rotation={[2.957, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere007_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[23.194, 358.102, 19.735]}
				rotation={[2.957, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere008_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[25.928, 358.102, 14.999]}
				rotation={[2.957, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere009_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[28.662, 358.102, 10.264]}
				rotation={[2.957, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere010_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[31.396, 358.102, 5.529]}
				rotation={[2.957, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere011_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[34.13, 358.102, 0.794]}
				rotation={[2.957, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere012_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[36.863, 358.102, -3.941]}
				rotation={[2.957, 0, -Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere013_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[37.051, 358.102, -15.05]}
				rotation={[2.957, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere014_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[34.317, 358.102, -19.785]}
				rotation={[2.957, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere015_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[31.583, 358.102, -24.52]}
				rotation={[2.957, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere016_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[28.849, 358.102, -29.255]}
				rotation={[2.957, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere017_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[26.116, 358.102, -33.99]}
				rotation={[2.957, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere018_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[23.382, 358.102, -38.725]}
				rotation={[2.957, 0, -2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere019_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[13.855, 358.102, -44.442]}
				rotation={[2.957, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere020_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[8.388, 358.102, -44.442]}
				rotation={[2.957, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere021_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[2.92, 358.102, -44.442]}
				rotation={[2.957, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere022_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-2.548, 358.102, -44.442]}
				rotation={[2.957, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere023_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-8.015, 358.102, -44.442]}
				rotation={[2.957, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere024_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-13.483, 358.102, -44.442]}
				rotation={[2.957, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere025_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-23.197, 358.102, -39.05]}
				rotation={[2.957, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere026_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-25.931, 358.102, -34.315]}
				rotation={[2.957, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere027_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-28.665, 358.102, -29.58]}
				rotation={[2.957, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere028_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-31.398, 358.102, -24.845]}
				rotation={[2.957, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere029_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-34.132, 358.102, -20.109]}
				rotation={[2.957, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere030_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-36.866, 358.102, -15.374]}
				rotation={[2.957, 0, 2.094]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere031_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-37.054, 358.102, -4.266]}
				rotation={[2.957, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere032_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-34.32, 358.102, 0.469]}
				rotation={[2.957, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere033_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-31.586, 358.102, 5.204]}
				rotation={[2.957, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere034_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-28.852, 358.102, 9.94]}
				rotation={[2.957, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere035_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-26.118, 358.102, 14.675]}
				rotation={[2.957, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sphere036_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-23.384, 358.102, 19.41]}
				rotation={[2.957, 0, Math.PI / 3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box008_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[37.557, 285.346, -16.721]}
				rotation={[-1.73, 0.736, -2.341]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box007_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[13.073, 285.346, 26.861]}
				rotation={[-1.608, 0.785, 0.125]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box013_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 286.991, -9.658]}
				rotation={[-1.608, 0.758, -1.096]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box015_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 286.991, -9.658]}
				rotation={[-1.608, 0.758, 3.093]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box016_Material_#59_0'].geometry}
				material={materials.Material_59}
				position={[-0.001, 286.573, -9.658]}
				rotation={[-1.608, 0.758, 0.999]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box020_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[1.947, 122.985, 33.948]}
				rotation={[-3.067, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Line001_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[7.639, 129.809, 32.841]}
				rotation={[-3.067, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Line002_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[7.639, 115.895, 33.832]}
				rotation={[-3.067, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box022_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[-2.373, 122.953, 33.493]}
				rotation={[0.073, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box019_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[2.219, 122.953, 33.493]}
				rotation={[-3.069, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Torus003_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[2.257, 121.901, 34.318]}
				rotation={[-3.085, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Torus004_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[-2.411, 121.901, 34.318]}
				rotation={[0.056, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box023_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[-1.949, 122.985, 33.948]}
				rotation={[0.075, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Line003_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[-7.64, 129.809, 32.841]}
				rotation={[0.075, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box018_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[6.432, 123.851, 33.561]}
				rotation={[-3.067, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Box021_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[-6.433, 123.851, 33.561]}
				rotation={[0.074, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Line004_Material_#60_0'].geometry}
				material={materials.Material_60}
				position={[-7.64, 115.895, 33.832]}
				rotation={[0.075, 0, 0]}
			/>
			{/* <mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder016_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[69.471, 281.72, 70.89]}
				rotation={[2.988, -0.43, 0.48]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder017_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[93.443, 265.266, 73.709]}
				rotation={[2.844, -0.576, 0.221]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder018_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[46.246, 276.694, 84.86]}
				rotation={[2.817, 0.003, 0.767]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder019_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[61.916, 259.985, 75.283]}
				rotation={[2.559, -0.451, 1.072]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder020_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[46.94, 244.057, 97.504]}
				rotation={[2.061, -0.378, 0.311]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder021_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[18.883, 256.438, 88.75]}
				rotation={[-3.133, -0.776, 1.277]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder022_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[67.474, 253.762, 97.896]}
				rotation={[2.468, -0.442, -0.076]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder023_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[88.235, 287.373, 41.963]}
				rotation={[2.782, -0.57, 0.324]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder024_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[44.292, 288.354, 54.525]}
				rotation={[-3.094, 0.169, 1.225]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder025_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[93.857, 298.13, -28.382]}
				rotation={[2.988, -0.43, -0.916]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder026_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[100.764, 281.748, -51.399]}
				rotation={[2.844, -0.576, -1.175]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder027_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[103.539, 293.125, -3.195]}
				rotation={[2.817, 0.003, -0.629]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder028_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[96.857, 276.489, -20.215]}
				rotation={[2.559, -0.451, -0.324]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder029_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[116.056, 260.631, -1.69]}
				rotation={[2.061, -0.378, -1.085]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder030_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[102.622, 272.959, 24.306]}
				rotation={[-3.133, -0.776, -0.12]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder031_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[119.99, 270.294, -21.756]}
				rotation={[2.468, -0.442, -1.473]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder032_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[68.738, 303.758, -51.782]}
				rotation={[2.782, -0.57, -1.072]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder033_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[73.458, 304.734, -6.524]}
				rotation={[-3.094, 0.169, -0.171]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder034_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[23.135, 319.08, -97.457]}
				rotation={[2.988, -0.43, -1.614]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder035_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[13.632, 302.698, -119.529]}
				rotation={[2.844, -0.576, -1.873]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder036_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[46.742, 314.076, -84.386]}
				rotation={[2.817, 0.003, -1.327]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder037_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[30.683, 297.439, -93.13]}
				rotation={[2.559, -0.451, -1.022]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder038_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[57.299, 281.581, -91.279]}
				rotation={[2.061, -0.378, -1.783]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder039_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[63.717, 293.909, -62.73]}
				rotation={[-3.133, -0.776, -0.818]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder040_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[47.414, 291.244, -109.18]}
				rotation={[2.468, -0.442, -2.171]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder041_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-11.147, 324.708, -99.236]}
				rotation={[2.782, -0.57, -1.771]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder042_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[21.559, 325.684, -67.601]}
				rotation={[-3.094, 0.169, -0.869]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder043_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-82.775, 312.278, -71.566]}
				rotation={[-2.695, -0.534, -2.409]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder044_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-99.296, 290.343, -81.147]}
				rotation={[-2.791, -0.785, -2.535]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder045_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-60.94, 321.513, -85.392]}
				rotation={[-2.927, -0.019, -2.403]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder046_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-68.452, 298.059, -83.258]}
				rotation={[3.097, -0.256, -1.911]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder047_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-51.161, 297.841, -109.03]}
				rotation={[2.63, -0.576, -2.595]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder048_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-28.808, 315.715, -95.278]}
				rotation={[-2.599, -0.451, -1.581]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder049_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-73.639, 298.667, -106.68]}
				rotation={[2.961, -0.813, -2.953]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder050_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-99.204, 299.95, -43.491]}
				rotation={[-2.847, -0.727, -2.445]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder051_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-60.251, 321.49, -52.984]}
				rotation={[-2.569, 0.357, -2.089]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder052_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-95.754, 289.494, 24.494]}
				rotation={[-2.695, -0.534, 2.565]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder053_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-107.09, 271.115, 35.787]}
				rotation={[-2.791, -0.785, 2.44]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder054_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-102.208, 297.232, 3.824]}
				rotation={[-2.927, -0.019, 2.571]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder055_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-102.11, 277.58, 10.367]}
				rotation={[3.097, -0.256, 3.063]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder056_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-119.219, 277.398, -9.217]}
				rotation={[2.63, -0.576, 2.379]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder057_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-103.241, 292.374, -24.325]}
				rotation={[-2.599, -0.451, -2.89]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder058_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-122.191, 278.09, 9.485]}
				rotation={[2.961, -0.813, 2.022]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder059_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-76.595, 279.165, 43.879]}
				rotation={[-2.847, -0.727, 2.529]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder060_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-75.831, 297.212, 10.294]}
				rotation={[-2.569, 0.357, 2.885]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder061_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-25.119, 280.589, 88.832]}
				rotation={[-2.695, -0.534, 1.954]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder062_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-28.324, 259.618, 106.806]}
				rotation={[-2.791, -0.785, 1.829]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder063_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-44.679, 289.418, 73.736]}
				rotation={[-2.927, -0.019, 1.96]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder064_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-40.306, 266.995, 79.787]}
				rotation={[3.097, -0.256, 2.452]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder065_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-69.114, 266.786, 72.68]}
				rotation={[2.63, -0.576, 1.768]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder066_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-64.067, 283.874, 48.102]}
				rotation={[-2.599, -0.451, 2.783]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder067_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-59.652, 267.576, 92.106]}
				rotation={[2.961, -0.813, 1.411]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder068_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[5.476, 268.803, 94.411]}
				rotation={[-2.847, -0.727, 1.918]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder069_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-15.791, 289.396, 62.52]}
				rotation={[-2.569, 0.357, 2.274]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder070_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[64.208, 238.629, 67.355]}
				rotation={[2.988, -0.43, 0.48]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder071_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[78.506, 228.815, 69.036]}
				rotation={[2.844, -0.576, 0.221]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder072_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[50.354, 235.631, 75.688]}
				rotation={[2.817, 0.003, 0.767]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder073_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[59.701, 225.664, 69.975]}
				rotation={[2.559, -0.451, 1.072]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder074_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[50.768, 216.164, 83.23]}
				rotation={[2.061, -0.378, 0.311]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder075_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[34.033, 223.549, 78.008]}
				rotation={[-3.133, -0.776, 1.277]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder076_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[63.017, 221.953, 83.464]}
				rotation={[2.468, -0.442, -0.076]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder077_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[75.4, 242.001, 50.101]}
				rotation={[2.782, -0.57, 0.324]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder078_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[49.189, 242.586, 57.594]}
				rotation={[-3.094, 0.169, 1.225]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder079_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[89.113, 254.523, -24.939]}
				rotation={[2.988, -0.43, -0.916]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder080_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[93.233, 244.752, -38.668]}
				rotation={[2.844, -0.576, -1.175]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder081_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[94.888, 251.538, -9.915]}
				rotation={[2.817, 0.003, -0.629]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder082_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[90.903, 241.615, -20.067]}
				rotation={[2.559, -0.451, -0.324]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder083_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[102.355, 232.156, -9.017]}
				rotation={[2.061, -0.378, -1.085]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder084_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[94.341, 239.509, 6.489]}
				rotation={[-3.133, -0.776, -0.12]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder085_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[104.701, 237.92, -20.986]}
				rotation={[2.468, -0.442, -1.473]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder086_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[74.13, 257.881, -38.896]}
				rotation={[2.782, -0.57, -1.072]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder087_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[76.945, 258.463, -11.901]}
				rotation={[-3.094, 0.169, -0.171]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder088_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[22.771, 274.787, -91.362]}
				rotation={[2.988, -0.43, -1.614]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder089_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[17.102, 265.015, -104.528]}
				rotation={[2.844, -0.576, -1.873]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder090_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[36.852, 271.802, -83.565]}
				rotation={[2.817, 0.003, -1.327]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder091_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[27.273, 261.879, -88.781]}
				rotation={[2.559, -0.451, -1.022]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder092_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[43.149, 252.42, -87.677]}
				rotation={[2.061, -0.378, -1.783]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder093_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[46.977, 259.773, -70.648]}
				rotation={[-3.133, -0.776, -0.818]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder094_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[37.253, 258.183, -98.354]}
				rotation={[2.468, -0.442, -2.171]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder095_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[2.322, 278.144, -92.423]}
				rotation={[2.782, -0.57, -1.771]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder096_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[21.831, 278.726, -73.553]}
				rotation={[-3.094, 0.169, -0.869]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder097_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-75.602, 269.599, -70.05]}
				rotation={[-2.695, -0.534, -2.409]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder098_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-85.457, 256.515, -75.764]}
				rotation={[-2.791, -0.785, -2.535]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder099_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-62.578, 275.108, -78.296]}
				rotation={[-2.927, -0.019, -2.403]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder100_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-67.059, 261.118, -77.024]}
				rotation={[3.097, -0.256, -1.911]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder101_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-56.744, 260.987, -92.397]}
				rotation={[2.63, -0.576, -2.595]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder102_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-43.411, 271.649, -84.193]}
				rotation={[-2.599, -0.451, -1.581]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder103_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-70.153, 261.48, -90.995]}
				rotation={[2.961, -0.813, -2.953]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder104_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-85.402, 262.246, -53.303]}
				rotation={[-2.847, -0.727, -2.445]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder105_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-62.167, 275.094, -58.966]}
				rotation={[-2.569, 0.357, -2.089]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder106_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-92.3, 248.144, 19.719]}
				rotation={[-2.695, -0.534, 2.565]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder107_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-99.062, 237.181, 26.455]}
				rotation={[-2.791, -0.785, 2.44]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder108_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-96.15, 252.76, 7.39]}
				rotation={[-2.927, -0.019, 2.571]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder109_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-96.091, 241.037, 11.292]}
				rotation={[3.097, -0.256, 3.063]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder110_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-106.296, 240.928, -0.389]}
				rotation={[2.63, -0.576, 2.379]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder111_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-96.766, 249.861, -9.401]}
				rotation={[-2.599, -0.451, -2.89]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder112_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-108.069, 241.341, 10.767]}
				rotation={[2.961, -0.813, 2.022]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder113_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-80.871, 241.983, 31.282]}
				rotation={[-2.847, -0.727, 2.529]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder114_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-80.416, 252.748, 11.249]}
				rotation={[-2.569, 0.357, 2.885]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder115_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-26.525, 239.106, 81.925]}
				rotation={[-2.695, -0.534, 1.954]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder116_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-28.436, 226.597, 92.646]}
				rotation={[-2.791, -0.785, 1.829]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder117_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-38.192, 244.373, 72.921]}
				rotation={[-2.927, -0.019, 1.96]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder118_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-35.583, 230.997, 76.53]}
				rotation={[3.097, -0.256, 2.452]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder119_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-52.767, 230.873, 72.29]}
				rotation={[2.63, -0.576, 1.768]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder120_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-49.757, 241.066, 57.63]}
				rotation={[-2.599, -0.451, 2.783]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder121_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-47.123, 231.344, 83.878]}
				rotation={[2.961, -0.813, 1.411]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder122_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-8.275, 232.076, 85.253]}
				rotation={[-2.847, -0.727, 1.918]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Cylinder123_Material_#230_0'].geometry}
				material={materials.Material_230}
				position={[-20.96, 244.359, 66.23]}
				rotation={[-2.569, 0.357, 2.274]}
			/> */}
		</group>
	);
}

export default Tower;